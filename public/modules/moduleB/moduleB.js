window.sfb.moduleB = function(win, doc, undefined, $, _, Modernizr){

	var compiledModuleBTemplate = Handlebars.getTemplate('/modules/moduleB/moduleB.hbs');

	//private properties
	var privateValue = 'privateValue';
	var privateMethod = function(){
		return privateValue;
	};

	//public properties
	var publicValue = 'publicValue';
	var publicMethod = function(){
		return publicValue;
	};

	//initalize
	var initialize = function(){



		var moduleBDataAndView = compiledModuleBTemplate({ name : 'I am module B' });

		$('body').append(moduleBDataAndView);

		console.log(privateValue,privateMethod(),publicValue,publicMethod());

	}();

	//public
	return {
		publicValue:publicValue,
		publicMethod:publicMethod
	};

}(window, document, undefined, jQuery, _, Modernizr);