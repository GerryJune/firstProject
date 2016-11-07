var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
app.set('views','views');
app.get('/',function  (req,res) {
	res.render('/test',{
		title:'tangwei'
	})
}).listen(8080);
console.log('start at'+port);


