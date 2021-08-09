let express = require('express');
let app = express();

app.use(express.static(__dirname));

let messages = [
  {
    name: 'JJ',
    message: 'Hi',
  },
  {
    name: 'Jane',
    message: 'Hello',
  },
];

app.get('/messages', (req, res) => {
  res.send(messages);
});

app.post('/messages', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

let server = app.listen(3000, () => {
  console.log('server listening on port', server.address().port);
});
