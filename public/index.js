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
        handlebars: '../libraries/handlebars.js/dist/handlebars', //placed in global scope
        mockjax: '../libraries/jquery-mockjax/jquery.mockjax', //placed in jQuery namespace
		globals: '../globals',
        string: '../libraries/string.js/lib/string', //normal AMD
        requireDomready: '../libraries/requirejs-domready/domready', //require plugins
        requireText: '../libraries/requirejs-text/text', //require plugins
        requireCSS: '../libraries/require-css/css', //require plugins
    },
    shim: {
        'globals': {
            deps: ['lodash','jquery', 'handlebars','backbone','mockjax']
        },
        'backbone': {
			deps: ['lodash','jquery']
        },
        'mockjax': {
            deps: ['jquery']
        }
    },
    map: {
        '*': {
            'requireCSS': '../../libraries/require-css/css' // or whatever the path to require-css is
        }
    }
});

requirejs(['requireDomready!','globals','componentA/A','componentB/B'], function(globals,A,B){
   
console.log(globals);
console.log(_);
console.log($);
console.log(Backbone);
console.log(Handlebars);
console.log(A);
console.log(B);

});