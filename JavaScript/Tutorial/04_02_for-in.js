const marks={
    sonu:78,
    bipin:65,
    kumkum:98,
};
for(let a in marks){
    console.log("marks of", a, "is", marks[a]);
    console.log("marks of " + a, "is " + marks[a]);// String concatanate
}
console.log(marks["sonu"]);
console.log(marks.sonu);
