let inc=document.getElementsByTagName("h2")
console.log(inc)
let sum=0;
inc[1].innerText=sum
inc[0].addEventListener("click", increase)
inc[2].addEventListener("click", decrease)
function increase(){
    sum++;
    inc[1].innerText=sum
}
function decrease(){
    sum--;
    inc[1].innerText=sum
}
inc[3].addEventListener("click", resetVal)
function resetVal(){
    sum=0
    inc[1].innerText=sum
}