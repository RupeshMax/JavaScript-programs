 var john = {
     name: 'i am john',
     age: '19',
     isActive: 'false',
 }

 var sam = {
    name: 'i am sam',
    age: '20',
    isActive: 'false',
}

let user = new Map()

user.set('john',john)
user.set('sam',sam)

console.log(user)
console.log(user.keys())  

for (const value of user.values()){
    console.log('for of ' + value.name)
}

for (const [key, value] of user.entries()) {
    console.log(key + ' = ' + value.name)
}

user.forEach((value , key) => console.log(key + '=' + value.name))

var arrofArr = [['one','1'],['two','2'],['three','3']]

var newMap = new Map(arrofArr)

console.log(newMap)