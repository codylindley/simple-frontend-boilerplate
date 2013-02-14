Handlebars.getTemplate = function(path) {
	var justFileName = path.split('/').pop().split('.')[0];
	if (Handlebars.templates === undefined || Handlebars.templates[justFileName] === undefined) {
		jQuery.ajax({
			url :  path,
			success : function(data) {
				if (Handlebars.templates === undefined) {
					Handlebars.templates = {};
				}
				Handlebars.templates[justFileName] = Handlebars.compile(data);
			},
			async : false
		});
	}
	return Handlebars.templates[justFileName];
};