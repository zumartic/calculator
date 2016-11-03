$( document ).ready(function() {
 var result = 0;
 var num; 

$( "#1" ).mouseup(function() {
  num=1;
  if ($('#display1').text()=="="){
   $('#display1').text("");
   $('#D2-content').text("");
   updateD2(num)
  }else if ($('#display1').text()!==""){
    result = Count(result, num); 
  }else updateD2(num);
});

$( "#2" ).mouseup(function() { 
  num=2;
  if ($('#display1').text()=="="){
   $('#display1').text("");
   $('#D2-content').text("");
   updateD2(num)
  }else if ($('#display1').text()!==""){
    result = Count(result, num); 
  }else updateD2(num);
});

$( "#3" ).mouseup(function() { 
  num=3;
  if ($('#display1').text()=="="){
   $('#display1').text("");
   $('#D2-content').text("");
   updateD2(num)
  }else if ($('#display1').text()!==""){
    result = Count(result, num); 
  }else updateD2(num);
});

$( "#4" ).mouseup(function() { 
  num=4;
  if ($('#display1').text()=="="){
   $('#display1').text("");
   $('#D2-content').text("");
   updateD2(num)
  }else if ($('#display1').text()!==""){
    result = Count(result, num); 
  }else updateD2(num);
});

$( "#5" ).mouseup(function() { 
  num=5;
  if ($('#display1').text()=="="){
   $('#display1').text("");
   $('#D2-content').text("");
   updateD2(num)
  }else if ($('#display1').text()!==""){
    result = Count(result, num); 
  }else updateD2(num);
});

$( "#6" ).mouseup(function() { 
  num=6;
  if ($('#display1').text()=="="){
   $('#display1').text("");
   $('#D2-content').text("");
   updateD2(num)
  }else if ($('#display1').text()!==""){
    result = Count(result, num); 
  }else updateD2(num);
});

$( "#7" ).mouseup(function() { 
  num=7;
  if ($('#display1').text()=="="){
   $('#display1').text("");
   $('#D2-content').text("");
   updateD2(num)
  }else if ($('#display1').text()!==""){
    result = Count(result, num); 
  }else updateD2(num);
});

$( "#8" ).mouseup(function() { 
  num=8;
  if ($('#display1').text()=="="){
   $('#display1').text("");
   $('#D2-content').text("");
   updateD2(num)
  }else if ($('#display1').text()!==""){
    result = Count(result, num); 
  }else updateD2(num);
});

$( "#9" ).mouseup(function() { 
  num=9;
  if ($('#display1').text()=="="){
   $('#display1').text("");
   $('#D2-content').text("");
   updateD2(num)
  }else if ($('#display1').text()!==""){
    result = Count(result, num); 
  }else updateD2(num);
});

$( "#0" ).mouseup(function() {      
  num=0;
  if ($('#display1').text()=="="){
   $('#display1').text("");
   $('#D2-content').text("");
   updateD2(num)
  }else if ($('#display1').text()!==""){
    result = Count(result, num); 
  }else updateD2(num);
});

$( "#point" ).mouseup(function() {
  if(!(/\./.test($('#D2-content').text()))){
    if($('#D2-content').text()==""){
      $('#D2-content').text($('#D2-content').text()+"0.");
  }else $('#D2-content').text($('#D2-content').text()+".");
  }
});

$( "#divide" ).mouseup(function() { $('#display1').text("/");
});

$( "#multiply" ).mouseup(function() { $('#display1').text("*");
});

$( "#plus" ).mouseup(function() { $('#display1').text("+");
});

$( "#minus" ).mouseup(function() { $('#display1').text("-");
});

$( "#equal" ).mouseup(function() {
  if($('#display1').text()!="="){
    $('#display1').text("=");
    result+=$('#D2-content').text();
    result=eval(result);
    $('#D2-content').text(result);
    result=0; 
  }  
});

$( "#C" ).mouseup(function() { 
  $('#display1').text("");
  $('#D2-content').text("0");
  result=0;
});

$( "#CE" ).mouseup(function() { 
  //$('#display1').text("");
  if($('#display1').text()!= ""){
    $('#display1').text("");
    $('#D2-content').text("0");
  }else $('#D2-content').text("0");
  //result=0;
});
  
})

function updateD2(value){
  if($('#D2-content').text().length<32){
    if($('#D2-content').text()=="0"){
      $('#D2-content').text(value);
    }else $('#D2-content').text($('#D2-content').text()+value);
    }
  }
function Count(value, key){
  // value is current str to be calculated e.g. 1+
  var resp;
  if (value==0){
   resp = $('#D2-content').text() + $('#display1').text();
  } else {resp = value + $('#D2-content').text() + $('#display1').text();
         }
  $('#display1').text("");
  $('#D2-content').text(key);
  return resp;
}