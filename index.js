let email = document.getElementById("email");
let password = document.getElementById("password");

var emailList = ["edible@mail.com"];
var passwordList = ["1234"]

function validate(){
    if(emailList.includes(email.value) && passwordList.includes(password.value)){
        window.location = "https://forms.gle/wGHJuW3ugQejeG7a6";
    }
    else{
        email.style.border="1px solid red";
        password.style.border="1px solid red"
        let alert =  document.getElementById("alert");
        alert.textContent = "Incorrect Credentials";
        alert.style.visibility="visible";
        alert.style.color="red";
    }
}