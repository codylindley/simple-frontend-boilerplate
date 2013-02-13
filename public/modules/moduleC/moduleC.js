window.moduleC = function(win, doc, undefined, $, _, Modernizr){


	var compiledModuleCTemplate = Handlebars.getTemplate('/modules/moduleC/moduleC.hbs');

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

		var moduleCDataAndView = compiledModuleCTemplate({ name : 'I am module C' });

		$('body').append(moduleCDataAndView);

		console.log(privateValue,privateMethod(),publicValue,publicMethod());

	}();

	//public interface
	return {
		publicValue:publicValue,
		publicMethod:publicMethod
	};

}(window, document, undefined, jQuery, _, Modernizr);