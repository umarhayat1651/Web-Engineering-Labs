function checkEvent() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var address = document.getElementById("address");
    var login = document.getElementById("login");
    var password = document.getElementById("password");
    var agreement = document.getElementById("agreement");

    if (name.value == "") {
        document.getElementById("nameErr").innerHTML = "Name is required.";
    }

    if (email.value == "") {
        document.getElementById("emailErr").innerHTML = "Email is required.";
    }

    if (address.value == "") { 
        document.getElementById("addressErr").innerHTML = "Address is required.";
    }

    if (login.value == "") {
        document.getElementById("loginErr").innerHTML = "Login is required.";
    }

    if (password.value == "") {
        document.getElementById("passwordErr").innerHTML = "Password is required.";
    }

    if (!agreement.checked) {
        document.getElementById("agreementErr").innerHTML = "You must agree to the terms.";
    }
    
}