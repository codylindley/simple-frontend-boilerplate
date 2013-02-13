---
#Simple Frontend Boilerplate
---

A starting point to develop websites or web applications without forcing a specific MV* framework or module loader. It could be used for simple websites, websites with some application like interfaces, or very small web applications that only require a handfull of modules not hundreds.

* [The Stack](#thestack)
* [Startup](#startup)
* [Configuration](#configuration)
* [Build](#build)
* [Explanation](#explanation)

---

##The Stack

* [NodeJS](http://nodejs.org/) & [NPM](https://npmjs.org/)
* [grunt](http://gruntjs.com/)
* [connect](http://www.senchalabs.org/connect/)
* [Bower](http://twitter.github.com/bower/)
* [jQuery](http://jquery.com/)
* [lodash](http://lodash.com/)
* [Modernizr](http://modernizr.com/)
* [handlebars.js](http://handlebarsjs.com/)
* [yepnope](http://yepnopejs.com/)
* [normalize.css](http://necolas.github.com/normalize.css/)
* [string.js](http://stringjs.com/)
* [js-url](https://github.com/websanova/js-url)
* [director](https://github.com/flatiron/director)

##Setup

#####Step 1: Install NodeJS

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
    "yepnope": "~1.5.4"
}
```

The above code can be found in `component.json`

#####Step 5: Configure port in server.js

Open the `server.js` file in editor of choice and update the port you'd like to server the webpages too. For example, based on the code below, once the server was running the html pages found in `/public` would be avaliable at `http://localhost:3044`.


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

##Build

##Explanation
