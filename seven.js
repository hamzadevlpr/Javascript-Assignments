console.clear();
//Sign up Screen Elements
// create Elements
let main_div = document.getElementById("box");
let inp_username = document.createElement("input");
inp_username.setAttribute("placeholder", "Username");
let inp_email = document.createElement("input");
inp_email.setAttribute("placeholder", "Email");
let inp_pass = document.createElement("input");
inp_pass.setAttribute("placeholder", "Password");
inp_pass.setAttribute("type", "password");
let user_cirlce = document.createElement("div");
let user_agrement = document.createElement("p");
user_agrement.innerHTML = "By clicking Below, I have Read Terms & Conditions";
let sign_up_btn = document.createElement("button");
let sign_in_btn = document.createElement("button");
sign_up_btn.innerHTML = "Sign Up";
let show_pass = document.createElement("i");
let show_username_error = document.createElement("span");
let show_email_error = document.createElement("span");
let show_pass_error = document.createElement("span");



// classList
inp_username.classList.add("username");
inp_email.classList.add("email");
user_cirlce.classList.add("user_cirlce");
user_agrement.classList.add("user_agrement");
sign_up_btn.classList.add("btn");
sign_in_btn.classList.add("btn");
show_pass.classList.add("fa-solid", "fa-eye-slash");
show_username_error.classList.add("error");
show_email_error.classList.add("error");
show_pass_error.classList.add("error");

// appendchild
main_div.appendChild(user_cirlce);
main_div.appendChild(inp_username);
main_div.appendChild(show_username_error);
main_div.appendChild(inp_email);
main_div.appendChild(show_email_error);

main_div.appendChild(inp_pass);
main_div.appendChild(show_pass);
main_div.appendChild(show_pass_error);
main_div.appendChild(user_agrement);
main_div.appendChild(sign_up_btn);
main_div.appendChild(sign_in_btn);
sign_in_btn.style.display = "none";

show_pass.addEventListener("click", function () {
    if (inp_pass.type == "password") {
        show_pass.classList.remove("fa-solid", "fa-eye-slash");
        show_pass.classList.add("fa-solid", "fa-eye");
        inp_pass.type = "text";
    } else {
        show_pass.classList.remove("fa-solid", "fa-eye");
        show_pass.classList.add("fa-solid", "fa-eye-slash");
        inp_pass.type = "password";
    }
});
// <h1 class="animate__animated animate__shakeX">An animated element</h1>
sign_up_btn.addEventListener("click", function () {
    // const pattern = /[^\s@]+@[^\s@]+\.[^\s@]+/gi;
    let arr = new Array();
    // checking if username is empty
    if (inp_username.value.length == 0) {

        inp_username.classList.add("animate__animated", "animate__shakeX");
        inp_username.style.borderColor = 'red';
        show_username_error.innerHTML = "Username Should not be Empty";
        show_username_error.style.display = "block";
        setTimeout(() => {
            inp_username.classList.remove("animate__animated", "animate__shakeX");
            inp_username.style.borderColor = 'white';
            show_username_error.style.display = "none";
        }, 1500);

        // checking if email is empty
    } else if (inp_email.value.length == 0) {

        inp_email.classList.add("animate__animated", "animate__shakeX");
        inp_email.style.borderColor = 'red';
        show_email_error.innerHTML = "Enter Valid Email Address";
        show_email_error.style.display = "block";
        setTimeout(() => {
            inp_email.classList.remove("animate__animated", "animate__shakeX");
            inp_email.style.borderColor = 'white';
            show_email_error.style.display = "none";
        }, 1500);
        // checking if email includes wrong characters
    } else if (inp_email.value.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)) {

        inp_email.classList.add("animate__animated", "animate__shakeX");
        inp_email.style.borderColor = 'red';
        show_email_error.innerHTML = "Enter Valid Email Address";
        show_email_error.style.display = "block";
        setTimeout(() => {
            inp_email.classList.remove("animate__animated", "animate__shakeX");
            inp_email.style.borderColor = 'white';
            show_email_error.style.display = "none";
        }, 1500);
        // checking if password is empty
    } else if (inp_pass.value.length == 0) {

        inp_pass.classList.add("animate__animated", "animate__shakeX");
        inp_pass.style.borderColor = 'red';
        show_pass_error.innerHTML = "Password Should not be Empty";
        show_pass_error.style.display = "block";
        setTimeout(() => {
            inp_pass.classList.remove("animate__animated", "animate__shakeX");
            inp_pass.style.borderColor = 'white';
            show_pass_error.style.display = "none";
        }, 1500);

        // checking if password lenght is less than 8
    } else if (inp_pass.value.length <= 8) {

        inp_pass.classList.add("animate__animated", "animate__shakeX");
        inp_pass.style.borderColor = 'red';
        show_pass_error.innerHTML = "Password Should 8 or more Characters";
        show_pass_error.style.display = "block";
        setTimeout(() => {
            inp_pass.classList.remove("animate__animated", "animate__shakeX");
            inp_pass.style.borderColor = 'white';
            show_pass_error.style.display = "none";
        }, 1500);
    } else {
        arr[0] = inp_username.value;
        arr[1] = inp_email.value;
        arr[2] = inp_pass.value;
        inp_email.value = "";
        inp_pass.value = "";
        console.log(arr);
        // main_div.style.display = "none";
        inp_username.style.display = "none";
        show_pass.style.top = "191px";
        inp_email.style.marginLeft = "-10px";
        sign_up_btn.innerHTML = "Sign In";
        inp_email.value = "";
        inp_pass.value = "";
    }

    sign_in_btn.addEventListener("click", function () {
        if (inp_email.value = arr) {

            inp_email.classList.add("animate__animated", "animate__shakeX");
            inp_email.style.borderColor = 'red';
            show_email_error.innerHTML = "Enter Valid Email Address";
            show_email_error.style.display = "block";
            setTimeout(() => {
                inp_email.classList.remove("animate__animated", "animate__shakeX");
                inp_email.style.borderColor = 'white';
                show_email_error.style.display = "none";
            }, 1500);
            // checking if email includes wrong characters
        } else if (inp_pass.value.length == 0 || inp_pass.value.length <= 8) {

            inp_pass.classList.add("animate__animated", "animate__shakeX");
            inp_pass.style.borderColor = 'red';
            show_pass_error.innerHTML = "Password Should not be Empty";
            show_pass_error.style.display = "block";
            setTimeout(() => {
                inp_pass.classList.remove("animate__animated", "animate__shakeX");
                inp_pass.style.borderColor = 'white';
                show_pass_error.style.display = "none";
            }, 1500);

        }  else {
            alert("Registered");
        }
    })




})




