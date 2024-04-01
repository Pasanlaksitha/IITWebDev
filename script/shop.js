//Declaring all t
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
        name: 'PRODUCT NAME 1',
        assets: 'necklace.jpg',
        price: 120000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        assets: 'necklace.jpg',
        price: 1200
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        assets: 'necklace.jpg',
        price: 2200
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        assets: 'necklace.jpg',
        price: 1300
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        assets: 'necklace.jpg',
        price: 3500
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        assets: 'necklace.jpg',
        price: 2400
    },
    {
    id: 7,
    name: 'PRODUCT NAME 1',
    assets: 'necklace.jpg',
    price: 120000
    },
    {
    id: 8,
        name: 'PRODUCT NAME 2',
    assets: 'necklace.jpg',
    price: 1200
},
{
    id: 9,
        name: 'PRODUCT NAME 3',
    assets: 'necklace.jpg',
    price: 2200
},
{
    id: 10,
        name: 'PRODUCT NAME 4',
    assets: 'necklace.jpg',
    price: 1300
},
    {
        id: 11,
        name: 'PRODUCT NAME 3',
        assets: 'necklace.jpg',
        price: 2200
    },
    {
        id: 12,
        name: 'PRODUCT NAME 4',
        assets: 'necklace.jpg',
        price: 1300
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
                ${value.price.toLocaleString()}
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
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button class="button-1" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button class="button-1" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCart.appendChild(newDiv);
            checkout.addEventListener('click',() =>{
                window.location.href = "checkoutPage.html";
            })
        }else{
                document.getElementById('checkout').disabled=true;

        }
    })
    netTotal.innerText = totalPrice.toLocaleString();
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