fs = require('fs');
function print(err, data) {
  console.log('point 1');
}
console.log('point 2');
fs.readdir('c:/', print);
console.log('point 3');
