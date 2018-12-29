/**This server file focuses on handling post request to success page*/

var express = require ('express'); //requiring express
var fs =  require('fs'); // requiring file system.
var bodyParser = require('body-parser');// accessing the body parser module
var app = express(); // app uses express
const PORT = 3000; // port number for server.

app.set('view engine', 'ejs');

var urlencodedParser = bodyParser.urlencoded({extended: false})



//route for GET method url : localhost:3000/lorem
app.get('/contact',(req, res)=>{
        console.log(`Method ${req.method} -------- URL ${req.originalUrl}`);
        res.render('index', {qs: req.query}); //passsing data into the view
});

app.post('/contact', urlencodedParser, (req, res)=>{
    console.log(`Method ${req.method} -------- URL ${req.originalUrl}`);
    console.log(req.body);
    res.render('contact-success', {data:req.body})

})

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`); // Prompting user that server is running
})