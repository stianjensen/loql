exports.run = function(domain) {
  var path = require('path');
  var fs = require('fs');
  var http = require('http');
  var connect = require('connect');
  var ltld = require("local-tld-lib");

  var port = (Math.random()*5000+10000)|0;
  ltld.add(domain, port);

  var oneDay = 86400000;
  var app = connect()
    .use(connect.logger('dev'))
    .use(connect.static(
      process.cwd(),
      {maxAge: oneDay}
    ));

  http.createServer(app).listen(port);

  console.log('Server running at http://' + domain + '.dev');

  process.on('SIGINT', function() {
    console.log("\nShutting down...");
    ltld.remove(domain);
    process.exit(0);
  });
}
