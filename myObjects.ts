// Object

const user = {
    name: "Caleb",
    age: 20,
    email: "c@l.com",
    occupation: "student",
    isAlive: true,
    isMarried: false,
}

function createUser(name: string, age: number, email: string, occupation: string, isAlive: boolean, isMarried: boolean) {}

createUser("Caleb", 20, "c@l.com", "student", true, false)

let newUser = {
    name: "Caleb",
    age: 20,
    email: "c@l.com",
    occupation: "student",
    isAlive: true,
    isMarried: false,
}

createUser(newUser.name, newUser.age, newUser.email, newUser.occupation, newUser.isAlive, newUser.isMarried)

// Returning an Object. The function explicitly specifies its return type using TypeScript's type annotation.
function creatCourse() :{name: string, lessons: number, price: number} {
    return {
        name: "typescript",
        lessons: 10,
        price: 20
    }
}


// Type Aliases
//Creating a type
type vehicle = {
    name: string,
    year: number,
    make: string,
    model: string
}

const car: vehicle = {
    name: "Civic",
    year: 2020,
    make: "Honda",
    model: "Civic"
}

function createVehicle(vehicle: vehicle) {}

export {}