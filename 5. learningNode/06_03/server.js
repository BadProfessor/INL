let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);
const { MongoClient } = require('mongodb');

require('dotenv').config();

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const uri = process.env.MONGO;

let messages = [
  { name: 'Tim', message: 'Hi' },
  { name: 'Jane', message: 'Hello' },
];

app.get('/messages', (req, res) => {
  res.send(messages);
});

app.post('/messages', (req, res) => {
  messages.push(req.body);
  io.emit('message', req.body);
  res.sendStatus(200);
});

io.on('connection', (socket) => {
  console.log('user connected');
});

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db('test').collection('devices');
  // perform actions on the collection object
  console.log('DB connected', err);
  client.close();
});

let server = http.listen(3000, () => {
  console.log('server is listening on port', server.address().port);
});
