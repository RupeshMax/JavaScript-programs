let guestUser = function (name,CourseCount){
    return 'Hello '+ name +' and your course count is '+ CourseCount

}

console.log(guestUser()) //null value 

let GuestUser = function (name = 'unName',CourseCount = 0){
    return 'Hello '+ name +' and your course count is '+ CourseCount

}
console.log(GuestUser()) //Default parameter

