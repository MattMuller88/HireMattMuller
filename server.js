const express = require("express");
const path = require("path");
const app = express();
/*
app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '/public', 'home.html'));
})
    */


app.use(express.static(__dirname + '/public'));

app.get('*', function(request, response){
    response.send('404 Page Not Found');
})


app.listen(8811, function(){
    console.log("Server is up on port 8811.");
})