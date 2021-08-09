let express = require('express');
let app = express();

app.use(express.static(__dirname));
let server = app.listen(3000, () => {
  console.log('server listening on port', server.address().port);
});
