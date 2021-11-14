// this is a node app
// 2 command line arguments: 1. a URL 2. a local file path
// should download at URL to local path with print
// I need to make an http request and wait for response
// I need to take the received data and write same to a file in local path filesystem
//to control order of asynchronous operations, I can use nested callbacks.

const request = require('request');
const fs = require("fs");

const path = process.argv[3];
const domain = process.argv[2];

request(domain, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  }
  fs.writeFile(`${path}`, body, function(error) {
    if (error) {
      console.log("error:", error);
    } else {
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${path}`);
    }
  });
});