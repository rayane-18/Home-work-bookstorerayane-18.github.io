let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "The Alchemist",
    image: "1.jpg",
    price: 79,
  },
  {
    id: 2,
    name: "1984",
    image: "2.jpg",
    price: 100,
  },
  {
    id: 3,
    name: "The Kite Runner",
    image: "3.jpg",
    price: 74,
  },
  {
    id: 4,
    name: "Animal Farm",
    image: "4.jpg",
    price: 40,
  },
  {
    id: 5,
    name: "To Kill a Mockingbird",
    image: "5.jpg",
    price: 320000,
  },
  {
    id: 6,
    name: "Fahrenheit 451",
    image: "6.jpg",
    price: 120000,
  },
  {
    id: 7,
    name: "Harry Potter and the Philosopher’s Stone",
    image: "7.jpg",
    price: 30,
  },
  {
    id: 8,
    name: "The Great Gatsby",
    image: "8.jpg",
    price: 30,
  },
  {
    id: 9,
    name: "Atomic Habits",
    image: "9.jpg",
    price: 30,
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
    list.appendChild(newDiv);
  });
}
initApp();
function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
