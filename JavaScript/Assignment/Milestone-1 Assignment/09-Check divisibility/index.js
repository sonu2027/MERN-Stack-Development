let n = Number.parseInt(prompt("Enter the length of array"));
let arr = [];
let num;
let cont = document.getElementById("container");
for (let i = 0; i < n; i++) {
  num = Number.parseInt(prompt("Enter the element of arr"));
  if (num % 3 == 0) {
    arr.push(num);
    let x = document.createElement("span");
    x.innerText = num;
    document.body.appendChild(x);
    x.style.marginLeft = "1rem";
  } 
  else {
    continue;
  }
}
