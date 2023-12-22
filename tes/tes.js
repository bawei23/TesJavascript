const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/segitiga', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log('receiving data...');
  console.log(req.body);
  var a = req.body
  res.send(a);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
});