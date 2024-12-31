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


// Returning more than one type
function getValue(myVal: number): boolean {
    if (myVal > 5) {
        return true
    } else {
        return false
    }
}

getValue(6)
console.log(getValue(6))

// Use in Arrow function
const getHello = (s: string): string => {
    return "Hello " + s
}

const heros = [ "thor", "spiderman", "ironman" ]

heros.map(hero => {
    return `Hero is ${hero}`
})

// void - does not return anything
function consoleError(errmsg: string): void {
    console.log(errmsg)
}

// never - never returns a value
function handleError(errmsg: string): never {
    throw new Error(errmsg)
}

export {}
