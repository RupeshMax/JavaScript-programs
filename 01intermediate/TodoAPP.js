const myTodos=[]

myTodos.push("Buy Bread")
myTodos.push("Push the code in git")
myTodos.push("got to pubg")

myTodos.forEach(function(todo,i){
    console.log(`Your task no. ${i+1} is : ${todo}`)
})
console.log(" ")

for (let i = myTodos.length-1; i >=0; i--) {
    console.log(`Your task no. ${i+1} is : ${myTodos[i]}`)
    
} //reverse forloop