const compression = require('compression');
const express = require('express');
const path = require('node:path');

const app = express();

app.use(compression());
app.use(express.static(__dirname + '/dist/training/'));

app.get('/*', function(request, response) {
  response.sendFile(path.join(__dirname + '/dist/training/index.html'));
});

app.listen(process.env.PORT || 8080);
