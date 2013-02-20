window.sfb.moduleC = function(win, doc, $, _, Modernizr){


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

	console.log(this); //here this is sfb object

	//public interface
	return {
		publicValue:publicValue,
		publicMethod:publicMethod
	};

}.call(window.sfb, window, document, jQuery, _, Modernizr /*, omitted undefined here */);