/**This server file focuses on the query Strings*/

var express = require ('express'); //requiring express
var fs =  require('fs'); // requiring file system.

var app = express(); // app uses express
const PORT = 3000; // port number for server.

app.set('view engine', 'ejs');



//route for GET method url : localhost:3000/lorem
app.get('/lorem',(req, res)=>{
        console.log(`Method ${req.method} -------- URL ${req.originalUrl}`);
       
        res.render('index', {qs: req.query}); //passsing data into the view
});

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`); // Prompting user that server is running
})