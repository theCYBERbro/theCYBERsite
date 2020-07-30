function updateCurrentYear(){
  var year;
  var date = new Date();
 
  year = date.getFullYear();
 
 
  $("#year").html(year);

 }

function getUserIp(){
  $.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
    console.log(data)
})

}