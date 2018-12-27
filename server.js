/**This file is to practice reading and writing streams. Using a read and write streams 
 * we I will write data to a server to display to the user. Also i will simultanieously
 * create a copy of the data once the get request is recieved.
 */

var express = require ('express'); //requiring express
var fs =  require('fs'); // requiring file system.

var app = express(); // app uses express
const PORT = 3000; // port number for server.



//route for GET method url : localhost:3000/lorem
app.get('/lorem',(req, res)=>{
        console.log(`Method ${req.method} -------- URL ${req.originalUrl}`);
        var readFile = fs.createReadStream(__dirname + '/readme.txt', 'utf8'); // creating read stream to read text file 
        var writeFile = fs.createWriteStream(__dirname + '/write.txt'); //creating  a file to write data to.
        readFile.pipe(writeFile); //writing data to file 

        readFile.pipe(res); // writing data to server.  -> response by default is a writeable stream
});

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`); // Prompting user that server is running
})


