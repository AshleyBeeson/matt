
var appServer = require("express");
var expressApp = appServer();

expressApp.use(appServer.static("public"));
expressApp.use(function(err, res, next) {
    res.status(422).send({error: err.message});
});

expressApp.get ('/*', function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});
         
var server = expressApp.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;
    
    console.log("server running on port: 8081");
});