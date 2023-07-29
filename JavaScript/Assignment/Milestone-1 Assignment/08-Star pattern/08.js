let l=document.getElementsByTagName("label")
let i=document.getElementsByTagName("input")
let para=document.getElementById("para")
let cont=document.getElementById("cont")
cont.style.marginTop="2rem"
function prgrph(){
    let num=Number.parseInt(i[0].value);
    for(let i=0; i<num; i++){
        for(let j=i; j<num; j++){
            let x= document.createElement("span")
            x.innerText="*"
            x.style.fontSize="1.2rem"
            x.style.marginLeft="0.6rem"
            x.style.color="black"
            document.body.appendChild(x)
        }
        let y=document.createElement("br")
        document.body.appendChild(y)
    }
}