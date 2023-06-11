const http = require('http');

const server = http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });

  request.on('connection', (data) => {
    console.log(data);
  });

  request.on('request', (req, res) => {
    console.log(req);
    console.log(res);
  });

  request.on('data', function (chunk) {
      response.write(chunk);
  });

  request.on('end', function () {
      response.end();
  });
});

const options = {
  hostname: 'localhost',
  port: 8080
};

server.listen(options, () => {
  console.log(`Server running at http://${options.hostname}:${options.port}/`);
});