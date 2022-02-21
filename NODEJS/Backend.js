// const http =require("http")
// const fs=require("fs")
// const fileContent=fs.readFileSync('contact.html')
// const server = http.createServer((req, res) => {

//     res.writeHead(200,{'Content-Type': 'text/html'});
//     res.end(fileContent)

// })

// server.listen(80,'127.0.0.1',()=>{
//     console.log("listening on port 80")
// })
var fs = require('fs');
fs.readFile('dele.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});
