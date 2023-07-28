// 1. assert()
// 2. info()
// 3. error()
// 4. log()
// 5. warn()
// 6. clear()
// 7. table()
// 8. time()
// 9. timeend()
console.log("In console");
console.log(console);
console.time("forLoop")
for (let index = 0; index < 100; index++) {
    console.log("a");
}
console.timeEnd("forLoop")

console.time("whileLoop")
let i=0
while(i<101) {
    console.log("a");
    i++
}
console.timeEnd("whileLoop")