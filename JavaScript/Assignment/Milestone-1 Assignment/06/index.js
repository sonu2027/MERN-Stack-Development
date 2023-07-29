let x=document.getElementById("uName")
let count=0
function write1(){
    let str1=x.value
    for(let i of str1){
        if(i=='a'|| i=='e' ||  i=='i'  ||  i=='o' || i=='u'){
            count++
        }
    }
    console.log(count)
    let var1=document.createElement("h3")
    var1.innerText="The total number of vowels in the string name is: "+count
    document.body.appendChild(var1)
}