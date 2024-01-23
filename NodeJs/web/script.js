const featuredproduct = [
  {
    image: "images/shoe2-removebg-preview.png",
    name: "JORDAN",
    price: 999,
    brand: "Jordan Retro 1",
  },
  {
    image: "images/retro2.png",
    name: "JORDAN",
    price: 999,
    brand: "Jordan Retro 2",
  },
  {
    image: "images/retro3.png",
    name: "JORDAN",
    price: 999,
    brand: "Jordan Retro 3",
  },
  {
    image: "images/retro4.png",
    name: "JORDAN",
    price: 999,
    brand: "Jordan Retro 4",
  },
  {
    image: "images/retro5.png",
    name: "JORDAN",
    price: 999,
    brand: "Jordan Retro 5",
  },
  {
    image: "images/retro6.png",
    name: "JORDAN",
    price: 999,
    brand: "Jordan Retro 6",
  },
  {
    image: "images/retro7.png",
    name: "JORDAN",
    price: 999,
    brand: "Jordan Retro 7",
  },
  {
    image: "images/retro7.png",
    name: "JORDAN",
    price: 999,
    brand: "Jordan Retro 7",
  },
];

let renderProduct = "";
let cardProductContainer = document.getElementById("left-part");

for (let i = 0; i < featuredproduct.length; i++) {
  renderProduct += `
   <div class="card">
   <div class="productimagecontainer">
   <img src="${featuredproduct[i].image} ">
   </div>
      <h3 class="card-product-name">${featuredproduct[i].name}</h3>
      <p class="card-product-price">${featuredproduct[i].price}rs</p>
      <p class="descrption">${featuredproduct[i].brand}</p>
   </div> 
    `;
}
cardProductContainer.innerHTML = renderProduct;

let cardBtnRightE1 = document.getElementById("product-btn-right");
let cardBtnLeftE1 = document.getElementById("product-btn-left");
cardBtnLeftE1.style.display = "none";

cardBtnRightE1.addEventListener("click", function () {
  cardProductContainer.style.transform = "translateX(-48%)";
  cardBtnRightE1.style.display = "none";
  cardBtnLeftE1.style.display = "block";
});

cardBtnLeftE1.addEventListener("click", function () {
  cardProductContainer.style.transform = "translateX(0%)";
  cardBtnRightE1.style.display = "block";
  cardBtnLeftE1.style.display = "none";
});
