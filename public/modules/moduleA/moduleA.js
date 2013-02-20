window.sfb.moduleA = function(win, doc, $, _, Modernizr){

	var compiledModuleATemplate = Handlebars.getTemplate('/modules/moduleA/moduleA.hbs');

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

		var moduleADataAndView = compiledModuleATemplate({ name : 'I am module A' });

		$('body').append(moduleADataAndView);

		console.log(privateValue,privateMethod(),publicValue,publicMethod());

	}();

	console.log(this); //here this is sfb object

	//public interface
	return {
		publicValue:publicValue,
		publicMethod:publicMethod
	};

}.call(window.sfb, window, document, jQuery, _, Modernizr /*, omitted undefined here */);
