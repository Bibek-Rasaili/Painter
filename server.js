const express = require('express');

const app = express();
app.use(express.static(__dirname+"/public")); //for boot strap ans custom css

app.get("/", function(req, res){
  // console.log(req);//logs request from browser.
  res.sendFile(__dirname+"/index.html");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
