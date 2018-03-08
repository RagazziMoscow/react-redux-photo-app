const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use('/static', express.static(__dirname + '/dist'));
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});