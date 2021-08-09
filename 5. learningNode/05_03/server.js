let express = require('express');
let app = express();

app.use(express.static(__dirname));

let messages = [
  { name: 'Tim', message: 'Hi' },
  { name: 'Jane', message: 'Hello' },
];

app.get('/messages', (req, res) => {
  res.send(messages);
});

let server = app.listen(3000, () => {
  console.log('server is listening on port', server.address().port);
});
