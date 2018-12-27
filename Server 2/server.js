/**This file is to practice reading and writing streams. Using a read and write streams 
 * we I will write data to a server to display to the user. I will be serving up HTML pages with this server.
 */

var express = require ('express'); //requiring express
var fs =  require('fs'); // requiring file system.

var app = express(); // app uses express
const PORT = 3000; // port number for server.



//route for GET method url : localhost:3000/lorem
app.get('/lorem',(req, res)=>{
        console.log(`Method ${req.method} -------- URL ${req.originalUrl}`);
        var readFile = fs.createReadStream(__dirname + '/index.html', 'utf8'); // creating read stream to read text file 
        readFile.pipe(res); // writing data to server.  -> response by default is a writeable stream
});

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`); // Prompting user that server is running
})




/**Creating server with out using express */


// var http = require('http');
// var fs = require('fs')

// var server = http.createServer((req,res)=>{
//     console.log(`Method ${req.method} -------- URL ${req.originalUrl}`);
//     res.writeHead(200, {'Content-Type' : 'text/html'});
//     var readFile = fs.createReadStream(__dirname + '/index.html', 'utf8');
//     readFile.pipe(res);

// });

// server.listen(3000, ()=>{
//     console.log('Server listening on port 3000')
// })