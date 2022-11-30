
var req = new XMLHttpRequest();
req.open('GET' , "https://my-json-server.typicode.com/FreSauce/json-ipl/data");
req.onload  = function(){
  var data = JSON.parse(req.responseText);
  console.log(data)
}

req.send();

