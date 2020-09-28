
function checkEmail() {
  var email = document.getElementById('txtEmail');
  
var x = 0;
var z = 0;
var invalidEmailarray = Array();
var validEmailarray = Array();




  var filter =/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


  if ( email == '') {
    alert('plase fill all details');
    return false;
    }

  else if (!filter.test(email.value)) {

   
    
     invalidEmailarray[x] = document.getElementById("txtEmail").value;
     x++;
     document.getElementById("txtEmail").value = "";

     alert('Please provide a valid email address');
   
     return false;
  
}

else if( filter.test(email.value)){
   
    
   validEmailarray[z] = document.getElementById("txtEmail").value;
   z++;

   for (var y=0; y<array.length; y++)
   {
    
     alert("enterd Invalid emails " + y + " = " + invalidEmailarray[y] + "<br/>");

   }
   for (var y=0; y<array.length; y++)
   {
    
     alert("enterd valid emails " + y + " = " + validEmailarray[y] + "<br/>");
 
   }

}

}









