const http = require('http');

var options = {
  hostname: 'localhost',
  port: 8080,
  path: '/',
  method: 'GET',
  headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
  }
};

var request = http.request(options, function (response) {
  console.log(response.data);
});

request.write('Hello World');
request.end();