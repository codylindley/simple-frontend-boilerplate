Handlebars.getTemplate = function(path) {
	if (Handlebars.templates === undefined || Handlebars.templates[path.split('/').pop().split('.')[0]] === undefined) {
		jQuery.ajax({
			url :  path,
			success : function(data) {
				if (Handlebars.templates === undefined) {
					Handlebars.templates = {};
				}
				Handlebars.templates[path.split('/').pop().split('.')[0]] = Handlebars.compile(data);
			},
			async : false
		});
	}
	return Handlebars.templates[path.split('/').pop().split('.')[0]];
};