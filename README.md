#Simple Frontend Boilerplate

A starting point to develop websites or web applications without forcing a specific MV* framework or modular loader.

Instructions:

* [Setup](#setup)
* [Startup](#startup)
* [Configuration](#configuration)
* [Explanation](#explanation)

---

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

This will install the follow node dependencies in `/node_moduels`:

```js
"devDependencies": {
    "grunt": "latest",
    "connect": "latest",
    "bower": "latest",
    "grunt-contrib-mincss": "~0.3.2",
    "grunt-handlebars-js": "~0.1.2"
}
```

#####Step 4: Get bower components/libraries

You can configure what bower retrieves by editing the dependencies in the `component.json` before running the install command. Remove or add anything you want or checkout the Bower components
Go to the root directory and run:

```js
> bower install
```

This will install the follow components in `/public/components/thirdparty/`:

```js
"dependencies": {
    "jquery": "~1.9.1",
    "lodash": "~1.0.0-rc.3",
    "modernizr-latest": "http://modernizr.com/downloads/modernizr-latest.js",
    "qunit": "https://github.com/jquery/qunit.git#~1.11.0",
    "normalize-css": "~2.1.0",
    "string.js": "https://github.com/jprichardson/string.js.git#~1.2.0",
    "js-url": "https://github.com/websanova/js-url.git#~1.7.5",
    "director": "https://github.com/flatiron/director.git#~1.1.10",
    "handlebars.js": "~1.0.8",
    "yepnope": "~1.5.4"
}
```

#####Step 5: Configure port in server.js

Open the `server.js` file in editor of choice and update the port you'd like to server the webpages too. For example, once the server was running, the html pages found in `/public` would be avaliable at `http://localhost:3044`.


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
