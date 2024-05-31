const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();
const port = process.env.PORT || 8443;

const options = {
  key: fs.readFileSync('/etc/tls/tls.key'),
  cert: fs.readFileSync('/etc/tls/tls.crt')
};

app.get('/sisteca', (req, res) => {
  res.send('Hello, World!');
});

https.createServer(options, app).listen(port, () => {
  console.log(`Server is running on https://localhost:${port}/sisteca`);
});
