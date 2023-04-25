const passwordBox=document.getElementById("Password");
const length=12;


const UpperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const $symbol="~!@#$%^&*=+_-?/₹";
const number="0123456789";

const allChars=UpperCase+lowerCase+$symbol+number;

function CreatePassword(){
    let Password="";
    Password +=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    Password +=number[Math.floor(Math.random()*number.length)];
    Password +=UpperCase[Math.floor(Math.random()*UpperCase.length)];
    Password +=$symbol[Math.floor(Math.random()*$symbol.length)];

    while(length>Password.length){
    Password +=allChars[Math.floor(Math.random()*allChars.length)];
}
passwordBox.value=Password;
}

function copypassword(){
    passwordBox.select();
    document.execCommand("copy");

}