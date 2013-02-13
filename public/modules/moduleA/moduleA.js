window.moduleA = function(win, doc, undefined, $, _){


	var compiledModuleATemplate = Handlebars.getTemplate('/modules/moduleA/moduleA');

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

		var foo = compiledModuleATemplate({ name : 'World' });

		console.log(foo);

		console.log(privateValue,privateMethod(),publicValue,publicMethod());

	}();

	//public interface
	return {
		publicValue:publicValue,
		publicMethod:publicMethod
	};

}(window, document, undefined, jQuery, _);