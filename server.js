var connect = require("connect");        

connect().use(connect.static('public')).listen(3044);