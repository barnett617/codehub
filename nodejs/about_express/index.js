var express = require('express');
var app = new express();

app.get('/', function(req, res) {
    res.send("Hello from express!");
})
app.listen(3000, () => {
    console.log('server running on port 3000');
})