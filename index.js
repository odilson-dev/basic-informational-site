var http = require("http");
var url = require("url");
var fs = require("fs");

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    let filename;
    console.log(q.pathname);
    switch (q.pathname) {
      case "/":
        filename = "./index.html";
        break;

      case "/about":
        filename = "./about.html";
        break;

      case "/contact-me":
        filename = "./contact-me.html";
        break;

      default:
        filename = "./404.html";
        break;
    }

    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
