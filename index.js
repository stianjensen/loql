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
    console.log("\nUsage: loql [NAME]\n");
    console.log("where NAME is the address your directory will be served at.\n");
    console.log("If you supply no name, the name of the current working directory will be used.");
    break;
  default:
    var server = require('./server.js');
    server.run(arg);
}
