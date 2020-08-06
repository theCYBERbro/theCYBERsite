function updateCurrentYear(){
  var year;
  var date = new Date();
 
  year = date.getFullYear();
 
 
  $("#year").html(year);

 }

 function getUserIp(){

  $.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
  var response = JSON.stringify(data, null, 2);
  var str = JSON.parse(response);
  var ipAdress = str['geobytesremoteip'];
  
  document.getElementById("ip").innerHTML=ipAdress;
  console.log(ipAdress);
  });
  
  }