console.log("login page");

document.getElementById("inputPassword").addEventListener("input", isshow);

function isshow(){
    var inputPassword = document.getElementById("inputPassword");
    var icon_eye = document.getElementById("icon-eye");
    
   if (inputPassword.value.length > 0) {
    console.log("ddd");
    console.log(inputPassword.value.length);
   icon_eye.classList.add('icon-eye-close');
   
 }
   
   
    
    inputPassword.type= "text";
    console.log(inputPassword);
   // alert("AAAAAA");
}


