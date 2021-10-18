let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let messages = [
  { name: 'Tim', message: 'Hi' },
  { name: 'Jane', message: 'Hello' },
];

app.get('/messages', (req, res) => {
  res.send(messages);
});

app.post('/messages', (req, res) => {
  messages.push(req.body);
  res.sendStatus(200);
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

let server = http.listen(3000, () => {
  console.log('server is listening on port', server.address().port);
});
