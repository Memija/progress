const compression = require('compression');
const express = require('express');
const helmet = require('helmet');
const path = require('node:path');

const app = express();

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      "default-src": ["'self'"],
      "connect-src": ["'self'", "https://api.github.com"],
      "style-src": ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      "font-src": ["'self'", "https://fonts.gstatic.com"],
      "script-src": ["'self'"],
      "img-src": ["'self'", "data:", "https://avatars.githubusercontent.com"]
    }
  }
}));
app.use(compression());
app.use(express.static(__dirname + '/dist/training/'));

app.get('/*', function(request, response) {
  response.sendFile(path.join(__dirname + '/dist/training/index.html'));
});

app.listen(process.env.PORT || 8080);
