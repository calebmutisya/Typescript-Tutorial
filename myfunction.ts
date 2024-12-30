function addTwo(num: number) {
    return num + 2
}

addTwo(5)
console.log(addTwo(5))

function getUpperCase(value: string) {
    return value.toUpperCase()
}

getUpperCase("hello")
console.log(getUpperCase("hello"))

function signUpUser(name: string, email: string, password: string) {
    name = name
    email = email
    password = password 
}

signUpUser("caleb", "c@l.com", "1234")
console.log(signUpUser("caleb", "c@l.com", "1234"))

function loginUser(email: string, password: number) {
    email = email
    password = password
}

loginUser("c@l.com", 1234)
console.log(loginUser("c@l.com", 1234))

export {}
