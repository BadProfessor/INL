let fs = require('fs');
let data = require('./data.json');

console.log(data.name);

fs.readFile('./data.json', 'utf-8', (err, data) => {
  data = JSON.parse(data);
  console.log(data.name);
});
