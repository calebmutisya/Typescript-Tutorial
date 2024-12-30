"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
addTwo(5);
console.log(addTwo(5));
function getUpperCase(value) {
    return value.toUpperCase();
}
getUpperCase("hello");
console.log(getUpperCase("hello"));
function signUpUser(name, email, password) {
    name = name;
    email = email;
    password = password;
}
signUpUser("caleb", "c@l.com", "1234");
console.log(signUpUser("caleb", "c@l.com", "1234"));
function loginUser(email, password) {
    email = email;
    password = password;
}
loginUser("c@l.com", 1234);
console.log(loginUser("c@l.com", 1234));
