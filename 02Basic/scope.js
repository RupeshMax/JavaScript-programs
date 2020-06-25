let iAmGlobal = 'someValue'

if (true) {
    var iamLocal = 'someMoreValue'
    iAmGlobal = 'superman'
    console.log(iAmGlobal);
    console.log(iamLocal);
}

console.log(iamLocal)
console.log(iAmGlobal)