let firstName=document.getElementById("fName")
let lastName=document.getElementById("lName")

function write1(){
    let str1=firstName.value[0]
    let str2=str1.toUpperCase()
    let str3=firstName.value
    let str4=str3.slice(1)
    console.log(str2+str4)
    firstName.value=str2+str4

    str1=lastName.value[0]
    str2=str1.toUpperCase()
    str3=lastName.value
    str4=str3.slice(1)
    console.log(str2+str4)
    lastName.value=str2+str4
}