var Promise = require("bluebird");
var readFile = Promise.promisify(require("fs").readFile);
var get = Promise.promisify(require("http").get);

readFile(__dirname + "/../resources/url", "utf8")
  .then(url => get(url))
  .then(response => response.on("data", (chunk) => console.log(chunk)))
  // .then(chunk => console.log(chunk))
  .catch(error => console.log(error));