const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send("<h1> This is the app created by @kelvincodes </h1>")
});

app.listen(process.env.PORT || 5000 );