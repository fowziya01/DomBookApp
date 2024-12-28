let form= document.getElementById("login-form") ;
form.addEventListener("submit",function(){
    event.preventDefault();
    let email=form.email.value;
    let password= form.password.value;
    let submitForm=form.submitForm.value;
    // validate admin login cerentials
    if(email=="admin@empher.com" && password=="empher@123"){
        alert("Logged in as Admin")
        window.location.href = admin.html;
    } 
        
     //validate user login credentials

if(email=="user@empher.com" && password=="user@123"){
        alert("Logged in as User");
        window.location.href = books.html;
        //save user details in localStorage as loginData.
        let loginData=localStorage.setItem('logindata',stringify(loginData));
     } else{
        alert("credentials are incorrect")
     }

});