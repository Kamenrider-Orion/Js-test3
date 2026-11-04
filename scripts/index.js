let username = prompt("type your username");
let password = prompt("type your password");
if (password != null, username != null){
    console.log(isValidPassword(password, username));
}
function isValidPassword(password, username){
    if (password.length < 8){
        console.log("Your Password is not long enough");
        return false;
    }
    if (password.includes(" ")){
        console.log("Your Password may not include spaces");
        return false;
    }
    if (password.includes(username)){
        console.log("Your Password may not include your Username");
        return false;
    }
    else{
        console.log("Your Password is approved");
        return true;
    }
}