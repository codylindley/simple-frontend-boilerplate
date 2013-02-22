---
#Simple Frontend Boilerplate
---

A starting point to develop websites or small web applications without forcing a specific MV* framework or module dependency loader. This boilerplate can be used for simple websites, websites with minimal application like interfaces, or very small web applications that only require a handful of modules not hundreds. The boilerplate is flexible in that it could be used for a single page architecture, a hybrid approach, or a traditional web page architecture. Additionally, its possible to drop the build step and rely on the speed of [yepnope](http://yepnopejs.com/).

* [The Stack](#the-stack)
* [Startup](#startup)
* [Configuration](#configuration)
* [Build](#build)
* [Explanation](#explanation)
	* [why](#why)
	* [nodeJS & npm](#nodeJS-&-npm)
	* [global.js & global.css](#global.js-&-global.css)
	* [libraries](#libraries)
	* [modules](#modules)
	* [run](run)
	* [yepnope](#yepnope)
	* [handlebars](#handlebars)
	* [building](#building)
* [Folder Structure](#folder-structure) for `/public`

---

##The Stack

* [nodeJS](http://nodejs.org/) & [NPM](https://npmjs.org/)
	* [grunt](http://gruntjs.com/)
		* [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)
		* [grunt-contrib-handlebars](https://github.com/gruntjs/grunt-contrib-handlebars)
		* [grunt-text-replace](https://npmjs.org/package/grunt-text-replace)
		* [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
	* [connect](http://www.senchalabs.org/connect/)
	* [bower](http://twitter.github.com/bower/)
* [jQuery](http://jquery.com/)
* [lodash](http://lodash.com/)
* [modernizr](http://modernizr.com/)
* [handlebars.js](http://handlebarsjs.com/)
* [yepnope](http://yepnopejs.com/)
* [normalize.css](http://necolas.github.com/normalize.css/)
* [string.js](http://stringjs.com/)
* [js-url](https://github.com/websanova/js-url)
* [director](https://github.com/flatiron/director)
* [font awesome](http://fortawesome.github.com/Font-Awesome/)

##Setup

#####Step 1: Install nodeJS

Use the [installer](http://nodejs.org/download/) for initial installation as well as updates to nodeJS and NPM.

#####Step 2: Download Code

Either download (i.e. ZIP) or GIT clone this repository so that its on your local computer.

#####Step 3: Install NPM packages

Go to the root directory and run:

```js
> npm install
```

This will install the follow node dependencies in `/node_modules`:

```js
"devDependencies": {
    "grunt": "latest",
    "connect": "latest",
    "bower": "latest",
    "grunt-contrib-handlebars": "~0.5.4",
    "grunt-text-replace": "~0.3.0",
    "grunt-contrib-uglify": "~0.1.1",
    "grunt-contrib-cssmin": "~0.4.1"
}
```

The above code can be found in `package.json`. If you plan on adding or removing nodejs npm packages I suggest using `--save-dev` flag so that your `package.json` file stays update as you make changes.

#####Step 4: Get bower libraries

You can configure what [bower](http://sindresorhus.com/bower-components/) retrieves by editing the dependencies in the `component.json` before running the install command.

Go to the root directory and run:

```js
> bower install
```

This will install the follow libraries in `/public/libraries/thirdparty/`:

```js
"dependencies": {
    "jquery": "~1.9.1",
    "lodash": "~1.0.0-rc.3",
    "modernizr-latest": "http://modernizr.com/downloads/modernizr-latest.js",
    "normalize-css": "~2.1.0",
    "string.js": "https://github.com/jprichardson/string.js.git#~1.2.0",
    "js-url": "https://github.com/websanova/js-url.git#~1.7.5",
    "director": "https://github.com/flatiron/director.git#~1.1.10",
    "handlebars.js": "~1.0.8",
    "yepnope": "~1.5.4",
    "font-awesome": "~3.0.2"
}
```

The above code can be found in `component.json`. If you plan on adding or removing bower components I suggest using `--save` flag so that your `component.json` file stays update as you make changes.

#####Step 5: Configure port in server.js

Open the `server.js` file in editor of choice and update the port you'd like to server the webpages too. For example, based on the code below, once the server was running the html pages found in `/public` would be available at `http://localhost:3044`.


```js
var connect = require("connect");

connect().use(connect.static('public')).listen(3044);
```

##Startup

#####Step 1: Start node server

Go to the root directory and run:


```js
> node server.js
```

This will run the `/public/index.html` at `http://localhost:PORT NUMBER PROVIDED IN SET IN SETUP STEP 5` (e.g. `http://localhost:3044`). Now open a web browser and visit the `http://localhost:PORT NUMBER PROVIDED IN SET IN SETUP STEP 5`

##Configuration

#####Step 1: Change namespace

Open the `public/global.js` file and change the global namespace (default is `sfb`) to a namespace of your choosing. Make sure you change each occurrence of `sfb`.

Additionally, open each default module:

* `public/modules/moduleA/moduleA.js`
* `public/modules/moduleB/moduleB.js`
* `public/modules/moduleC/moduleC.js`

Update the namespace used in the module files (i.e. replace `sfb` with your custom namespace).


##Build

Go to the root directory and run:

```js
> grunt
```

This will create minified versions of the css and js files and precompile the handlebars files, placing each in `public/build/`. Have a look at the `grunt.js` file to configure the build.

After running the first build, its possible to use the minified files locally when viewing in a browser by adding `?compress=true` to the end of the url (i.e. `http://localhost:XXXX?compress=true`).

##Explanation

#####Why

Because not every project requires an AMD/CommonJS dependency loader or some degree of MV\*. In fact, simple and small is always better than over optimizing or planning for the unknown. Additionally, without a boilerplate like this, one might never really grok why moving to the next level of application organization is necessary. When you find the pain points with this simple organization, its time to consider a loader and MV\*. Mostly so that you can take advantage of things like, dependency management, data binding, and framework features.

#####nodeJS & npm

If nodeJS is a mystery to you just think of it as a black box. Its the server part, which allows a web page (e.g. `index.html`) to be served to `http://localhost:XXXX`. However, if you ever want to get good with grunt and its plugins you'll need to learn some nodeJS basics.

npm is a package manager. It simply provides a community repository of libraries that can be used by nodesJS. It does a lot of fancy things but basically its a global stash for community tools which you can include in your projects.

#####bower

Bower is a browser/client-side package manager. Its npm for the browser. They call it a component manager but, again, at the end of the day its simply a repository of community libraries/tools you can pull into your projects for use in a web browser.

#####globals.js & global.css

The `global.css` file should contain any CSS that is required everywhere.

The `global.js` file contains the code to setup a namespace for the project. As well this file setups the global namespace and setups an object in the namespace called `globals` (i.e. `window.namespace.globals`). When the file is parsed by the browser `globals` will contain public properties used everywhere. Its also possible to do some global code setup inside the function that returns these public properties. Think of this as a place to put code that setups global constants, properties, methods, or routing logic. This file is not unique to a web page but should be runnable on any web page.

#####libraries

The `/libraries` directory contains all of the project specific libraries used in the project. All third party libraries that are agnostic to the specifics of the project should be placed in the `/thirdparty` folder. If you customize a third party library make sure to take it out of the `/thirdparty` directory. Libraries are a good place to put code you write for a project that might be worth re-using in another project. Heck, you might even get crazy and place register the code with bower so anyone could use it, in any project.

#####modules

The modules directory contains all of the modules used in the project. Modules are contained in there own folder. Each module is made up of one or more CSS, JS, or HBS (aka handlebars templates) files. The JS files in modules follows the module pattern. Note that when the module is parsed the scope of the function that produces the module is bound to the namespace object. Thus, the value `this` will be the namespace object. Which is handy for getting at global values in the `globals` object. Think of modules as a private scope where you can pass in any global or library code you would like to use in the module.

Modules dependancies are managed by order of inclusion in an HTML page.

If you haven't ever thought about modules I'd suggest [reading up on the topic](http://msdn.microsoft.com/en-us/library/hh404079.aspx).

#####run

The run directory will contain one file for each web page in the project. This should always be the  last JS file invoked for a page. It's provided so that once all the libraries, globals, and modules are loaded you can do something with all them together. In other words, run is where you put all of the code that actually makes use of libraries, globals, and modules code.

#####yepnope.js

I am using yepnope.js as a script and style loader for JavaScript files and CSS files. It has the added bonus of doing some clever feature loading but really I wanted it so that I can load CSS and JS without blocking, but then, make sure the order in the HTML pages, in which I included the files, is honored once the code is parsed.

#####handlebars.js

Handlebars templates provide HTML templates for use in modules. As well, they can be pre-compiled to make things go faster. Additionally, if you think about it they can be used for client-side includes.

#####building

The build process does 4 things.

1. add `?v=0-1-0` to the end of the minified CSS and JS file's to bust cache when build version changes
2. compile all handlebar templates used in development and put them in `/build/hbs.js`
3. minify all CSS and place it in `/build/index.min.css`
4. minify all JS and place it in `/build/index.min.js`

When you are running the code locally (i.e. http://localhost:XXXX) the index.html page loads the non-minified .css and .js files individually. In addition to this the handlebar templates are loaded (i.e. AJAX) and compiled on demand.

When you are not running from a localhost the html pages use the minified and compiled files (.html, .css, and .hbs files) found in `build` directory. Keep in mind that this does include all of the handlebars templates, compiled to a single file.


##Folder Structure `/public`

	├── build
	│   ├── hbs.compile.js
	│   ├── index.min.css
	│   └── index.min.js
	├── favicon.ico
	├── globals.css
	├── globals.js
	├── index.html
	├── libraries
	│   ├── customTwitterBootstrap
	│   │   └── bootstrapBase.css
	│   ├── getHandleBarsTemp
	│   │   └── getHandleBarsTemp.js
	│   ├── projectSpecificLibrary
	│   │   └── projectSpecificLib.js
	│   └── thirdparty
	├── modules
	│   ├── moduleA
	│   │   ├── moduleA.css
	│   │   ├── moduleA.hbs
    │   │   └── moduleA.js
    │   │   └── partialA.js
	│   ├── moduleB
	│   │   ├── moduleB.css
	│   │   ├── moduleB.hbs
	│   │   └── moduleB.js
	│   └── moduleC
	│       ├── moduleC.css
	│       ├── moduleC.hbs
	│       └── moduleC.js
	└── run
		    └── index.run.js

