requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'components',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
		backbone: '../libraries/backbone/backbone', //placed in global scope
		jquery: '../libraries/jquery/jquery', //placed in global scope
		lodash: '../libraries/lodash/lodash.underscore', //placed in global scope
        string: '../libraries/string.js/lib/string',
        handlebars: '../libraries/handlebars.js/dist/handlebars', //placed in global scope
		globals: '../globals'
    },
    shim: {
        'globals': {
            deps: ['lodash','jquery', 'handlebars','backbone']
        },
        'backbone': {
			deps: ['lodash','jquery']
        }
    }
});

requirejs(['globals','componentA/A','componentB/B'], function(globals,A,B){
   
console.log(globals);
console.log(_);
console.log($);
console.log(Backbone);
console.log(Handlebars);
console.log(A);
console.log(B);

});