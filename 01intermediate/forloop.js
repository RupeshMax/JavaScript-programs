days= ['Mon','Tue','Wen','Thur','Fri','Sat','Sun']
console.log("Mon - sun")
for (let i = 0; i < days.length; i++) {
    console.log(days[i]);
}
console.log(" ")
console.log("Sun - Mon")
for (let i = days.length-1; i>=0; i--) {
    console.log(days[i]);
    
}