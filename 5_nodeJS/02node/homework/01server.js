
var http = require("http");

var url = require("url");

var server = http.createServer((req,res) => {
    res.write('<head><meta charset="UTF-8"></head>');

    var urlObj = url.parse(req.url, true);

    // res.writeHead(200,{"Content-Type":"text/plain","Access-Control-Allow-Origin":"http://localhost:63342"});

    res.write(JSON.stringify(urlObj.query));

    console.log(JSON.stringify(urlObj.query));

    res.end();
});


server.listen(8000);