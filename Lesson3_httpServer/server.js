const http = require("http");

var myHttp = http.createServer(function (request, response){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
});

myHttp.listen(8888);