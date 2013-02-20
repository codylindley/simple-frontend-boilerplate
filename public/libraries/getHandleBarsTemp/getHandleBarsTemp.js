/*
There are some assumptions for this to work properly...
- template extension is ".hbs"
- partials are located within the module's directory
- Underscore/Lo-Dash is available
*/

Handlebars.getTemplate = function(url) {

	// url = modules/foo/foo.hbs
	var file = url.split('/').pop(); // foo.hbs
	var path = url.split(file)[0]; // modules/foo/
	var name = file.split('.')[0]; // foo

	if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
		jQuery.ajax({
			url :  url,
			success : function(data) {

				if (Handlebars.templates === undefined) {
					Handlebars.templates = {};
				}

				Handlebars.findPartials(data, path);

				Handlebars.templates[name] = Handlebars.compile(data);

				// register all templates as partials so
				// they can be used as such if needed
				Handlebars.registerPartial(name, data);

			},
			async : false
		});
	}
	return Handlebars.templates[name];
};

Handlebars.findPartials = function(data, path){

    var partials = data.match( /{{>\s*([^\s]+?)\s*}}/ig );

    if(!partials || partials.length < 1) {
        return;
    }

    partials = _.unique(partials);
    partials = _.each(partials, function(partial) {
        partial = partial.split(' ')[1].split('}}')[0];
        Handlebars.getTemplate(path + partial + '.hbs');
    });

}
