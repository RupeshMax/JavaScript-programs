let sayHello = function(name) {
    console.log("Greeting  message for user");
    console.log(`Hey ${name}`)
}

//sayHello('john')

let fullNameMaker = function(firstName, lastName) {
    console.log('welcome to LCO')
    console.log(`Happy to have you, ${firstName} ${lastName}`)

}

//fullNameMaker('John','Doe')

let myAdder = function(num1, num2) {
    let added = num1 + num2
    return added
}

console.log(myAdder(5,6))