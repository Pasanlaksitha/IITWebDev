let openCart = document.querySelector('.shopping')
let closeCart = document.querySelector('.closeShopping')
let list = document.querySelector('.list')
let listCard = document.querySelector('.listCard')
let body = document.querySelector('body')
let netTotal = document.querySelector('.total')
letQuantity = document.querySelector('.quantity')

openCart.addEventListener('click',()=>{
    body.classList.add('.active');
})
closeCart.addEventListener('click', ()=>{
    body.classList.remove('.active');
})