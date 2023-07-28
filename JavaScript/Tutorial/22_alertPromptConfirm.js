//It will alert you
alert("hey, are you alert")

// To take input 
const a=prompt("Enetr a")

// To write the value of a in html document
document.write(a)

//To change the type of a into number
// a=Number.parseInt(a)

// It will write the type of a in alert
alert("alert, you have entered type of a "+ typeof a)

// To take default input in prompt
const b=prompt("Enter the value of b", "5678")
document.write(b)

//Confirm
let write=confirm("Please select ok or cancel")
if(write){
    document.write(write)
}
else{
    document.write("I am trying to write")
}