let openCart = document.querySelector('.shopping');
let closeCart = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCard');
let body = document.querySelector('body');
let netTotal = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let checkout = document.querySelector('.proceedCheckout')
openCart.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeCart.addEventListener('click', ()=>{21021998
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Project Gaia Cap',
        assets: 'cap.jpg',
        price: 4
    },
    {
        id: 2,
        name: 'Deer Print Mug',
        assets: 'deerprintMug.jpeg',
        price: 5
    },
    {
        id: 3,
        name: 'Husk Print Mug',
        assets:'mugE.jpeg',
        price: 8
    },
    {
        id: 4,
        name: 'Natural Stones Bracelet(V)',
        assets: 'blueBracelet.jpeg',
        price: 4
    },
    {
        id: 5,
        name: "Women's T Shirt-White",
        assets: 'WomenTshirt.jpeg',
        price: 10
    },
    {
        id: 6,
        name: "Women's T shirt-Cream",
        assets: 'womenTshirt2.jpg',
        price: 10
    },
    {
        id: 7,
        name: "Men's T shirt-Green",
        assets: 'menTshirt.jpg',
        price: 11
    },
    {
        id: 8,
        name: "Men's T shirt-Blue",
        assets: 'menTshirt2.jpg',
        price: 12
    },
    {
        id: 9,
        name: 'Turtle Printed Sustainable Bottle',
        assets: 'turtleBottle.jpg',
        price: 4.5
    },
    {
        id: 10,
        name: 'Lepoard Printed Sustainable Bottle',
        assets: 'leapordBottle.jpeg',
        price: 6
    },
    {
        id: 11,
        name: 'Clay Beads Necklace(V)',
        assets: 'clayBeadNecklace.jpeg',
        price: 8
    },
    {
        id: 12,
        name: 'Clay NeckLace(V)',
        assets: 'clayNecklace.jpeg',
        price: 6
    },
];
let listCarts  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');

        newDiv.innerHTML = `
           
            <div class="PImage">
                 <img src="assets/${value.assets}" alt="products">            
            </div>
            <div class="title">
            <h3> ${value.name}</h3>
                   
            </div>
            <div class="price">
                USD ${value.price.toLocaleString()}
            </div>
            <div class="addToCart">
                 <button onclick="addToCard(${key})">Add To Card</button>
            </div>
           
            `
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCarts[key] == null){
        // copy product form list to list card
        listCarts[key] = JSON.parse(JSON.stringify(products[key]));
        listCarts[key].quantity = 1;
    }
    reloadCart();
}
function reloadCart(){
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="assets/${value.assets}" alt="product"></div>
                <div>${value.name}</div>
                <div>USD ${value.price.toLocaleString()}</div>
                <div>
                    <button class="button-1" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button class="button-1" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCart.appendChild(newDiv);
            checkout.addEventListener('click',() =>{
                window.location.href = "checkout-page.html";
            })
        }else{
            document.getElementById('checkout').disabled=true;

        }
    })
    netTotal.innerText = "USD "+totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity === 0){
        delete listCarts[key];
    }else{
        listCarts[key].quantity = quantity;
        listCarts[key].price = quantity * products[key].price;
    }
    reloadCart();
}