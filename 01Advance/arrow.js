 const sayHello = (name) => `hey there ${name} !`

 console.log(sayHello('ram'))

 const todos = [{
     title: 'Buy bread',
     isDone: true,
 },{
     title: 'go to gym',
     isDone: false
 }]

 const thingsDone = todos.filter((todo) => todo.isDone === true)

 console.log(thingsDone)