#! /usr/bin/env node

var userArgs = process.argv.slice(2);

var arg;
if (userArgs.length === 0) {
  arg = "current_dir_name"
} else {
  arg = userArgs.shift();
}
switch (arg) {
  case "help":
    console.log("HELP");
    break;
  default:
    var server = require('./server.js');
    server.run(arg);
}
