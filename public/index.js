requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'components',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
		backbone: 'thirdparty/backbone/backbone',
		jquery: 'thirdparty/jquery/jquery',
		lodash: 'thirdparty/lodash/lodash.underscore',
		globals: '../globals'
    },
    shim: {
        'globals': {
            deps: ['lodash','jquery', 'backbone']
        },
        'lodash': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        },
        'backbone': {
			deps: ['lodash','jquery'],
			exports: 'Backbone'
        }
    }
});

requirejs(['globals','compoenentA/compoenentA'], function(globals,A){
   
console.log(globals);
console.log(_);
console.log($);
console.log(Backbone);
console.log(A);

});