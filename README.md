---
#Simple Frontend Boilerplate
---

A starting point to develop websites or small web applications without forcing a specific MV* framework or module loader. It could be used for simple websites, websites with minimal application like interfaces, or very small web applications that only require a handful of modules not hundreds. The boilerplate is flexible in that it could be used for a single page architecture, a hybrid approach, or a traditional web page architecture. Additionally, its possible to drop the build step and rely on the speed of [yepnope](http://yepnopejs.com/).

* [The Stack](#the-stack)
* [Startup](#startup)
* [Configuration](#configuration)
* [Build](#build)
* [Explanation](#explanation)

---

##The Stack

* [nodeJS](http://nodejs.org/) & [NPM](https://npmjs.org/)
	* [grunt](http://gruntjs.com/)
		* [grunt-contrib-mincss](https://github.com/gruntjs/grunt-contrib-mincss)
		* [grunt-contrib-handlebars](https://github.com/gruntjs/grunt-contrib-handlebars)
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
* [Font Awesome](http://fortawesome.github.com/Font-Awesome/)

##Setup

#####Step 1: Install nodeJS

Use the [installer](http://nodejs.org/download/) for initial installation and updates.

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
    "grunt-contrib-mincss": "~0.3.2",
    "grunt-contrib-handlebars": "~0.3.5"
  }
```

The above code can be found in `package.json`

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

The above code can be found in `component.json`

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

This will run the `/public/index.html` at `http://localhost:PORT NUMBER PROVODED IN SET IN SETUP STEP 5` (e.g. `http://localhost:3044`). Now open a web browser and visit the `http://localhost:PORT NUMBER PROVODED IN SET IN SETUP STEP 5`

##Configuration

#####Step 1: Change namespace

Open the `public/global.js` file and change the global namespace (default is `sfb`) to a namespace of your choosing. Make sure you change each occurrence of `sfb`.

Additionally, open each default module:

* `public/modules/moduleA.modulesA.js`
* `public/modules/moduleA.modulesB.js`
* `public/modules/moduleA.modulesC.js`

Update the namespace used in the module files (i.e. replace `sfb` with your custom namespace).


##Build

Go to the root directory and run:

```js
> grunt
```

This will create minified versions of the css and js files and precompile the handlebars files in `public/build/`. Have a look at the `grunt.js` file to configure the build.

After running the first build, its possible to use the minified files when viewing in a browser by adding `?compress=true` to the end of the url.

##Explanation

coming soon.