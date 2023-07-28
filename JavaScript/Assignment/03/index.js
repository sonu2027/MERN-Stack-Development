let x=document.getElementsByTagName("button")
x[0].addEventListener("dblclick", prints)
function prints(){
    let pg=document.createElement("p")
    pg.innerText="You have submitted your response"
    document.body.appendChild(pg)
}