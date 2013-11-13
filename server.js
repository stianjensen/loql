exports.run = function(domain) {
  var path = require('path');
  var fs = require('fs');
  var http = require('http');
  var connect = require('connect');
  var ltld = require("local-tld-lib");

  var port = (Math.random()*5000+10000)|0;
  port = 12000
  ltld.add(domain, port);

  var app = connect()
    .use(connect.favicon())
    .use(connect.logger('dev'))
    .use(connect.static(process.cwd()));

  http.createServer(app).listen(port);

  console.log("Internal server at http://localhost:" + port);
  console.log('Server running at http://' + domain + '.dev');

  process.on('SIGINT', function() {
    console.log("\nShutting down...");
    ltld.remove(domain);
    process.exit(0);
  });
}
