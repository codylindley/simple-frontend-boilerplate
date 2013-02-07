define(['globals','requireText!componentA/text.html','requireCSS!componentA/sheet'], function(globals,html) {

	console.log(html);
   
	console.log(globals);
	console.log(_);
	console.log($);
	console.log(Backbone);


	return {
		'componentA': 'componentA'
	};

});