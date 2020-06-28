const number = ["One", "two" , "three" , "four" ,"five"]

// number[1] = "something"
// console.log(number)

//start
number.unshift("one")
console.log("start - "+number)
number.shift()
console.log(number)

//end
number.push("six")
console.log("end - "+number)
number.pop()
console.log(number)

//middle
number.splice(2,1,'something')
console.log("middle - "+number)
