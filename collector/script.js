const passwordInput = document.getElementById("password");

passwordInput.addEventListener("keydown",function(event){
    console.log("Key Pressed", event.key);
});