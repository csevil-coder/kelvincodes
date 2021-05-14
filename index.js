const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send("<h1> NICOLETA IS THE BEST FUCK OF THE REST!!!</h1>")
});

app.listen(process.env.PORT || 5000 );