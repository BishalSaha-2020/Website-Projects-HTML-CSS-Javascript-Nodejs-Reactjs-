var fs = require('fs');
fs.readFile('dele.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});
