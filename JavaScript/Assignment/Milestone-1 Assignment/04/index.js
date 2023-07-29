const marks=new Array(5)
for(let i=0; i<5; i++){
    marks[i]=Number.parseInt(prompt("Enter marks of student"))
}
console.log(marks)
let highest=0
for(let i of marks){
    i>highest?highest=i:highest=highest
}
console.log("The highest marks is:",highest);