
window.sfb.moduleB = function(win, doc, $, _, Modernizr){

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

	console.log(this); //here this is sfb object

	//public
	return {
		publicValue:publicValue,
		publicMethod:publicMethod
	};

}.call(window.sfb, window, document, jQuery, _, Modernizr /*, omitted undefined here */);