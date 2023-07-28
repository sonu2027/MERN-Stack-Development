let x=document.getElementsByTagName("button")
x[0].addEventListener("mouseout", prints)
function prints(){
    let pg=document.createElement("p")
    pg.innerText="You have over the mouse on submitted button"
    document.body.appendChild(pg)
}