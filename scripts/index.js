let username = prompt("type your username");
let password = prompt("type your password");
let length = password.length;
let space = password.includes(" ");
if (username != null && password != null && length <= 8 && space != null) {
    console.log(true);
}else if (length > 8 || password == username || space == null ){
    console.log(false);  
}else{
    console.log(false);
}