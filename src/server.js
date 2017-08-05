var express = require('express');
var app = express();

const DATA = [
    {id: 11, name: "Bombasto"},
    {id: 12, name: "Magenta"},
    {id: 13, name: "Celeritas"},
    {id: 14, name: "Dynama"},
    {id: 15, name: "Dr IQ"},
    {id: 16, name: "SRK"},
    {id: 17, name: "Tornado"},
    {id: 18, name: ""},
]

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/heroes', function(req, res){
    res.json(DATA);
});

app.listen(8082, function(){
    console.log("server started");
})