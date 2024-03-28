const openCart = document.querySelector('.shopping')
const closeCart = document.querySelector('.closeShopping')
const list = document.querySelector('.list')
const listCart = document.querySelector('.listCard')
const body = document.querySelector('body')
const netTotal = document.querySelector('.total')
const quantity = document.querySelector('.quantity')

openCart.addEventListener('click', () => {
  body.classList.add('active')
})
closeCart.addEventListener('click', () => {
  body.classList.remove('active')
})

const products = [
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
  }
]
const listCarts = []
function initApp () {
  products.forEach((value, key) => {
    const newDiv = document.createElement('div')
    newDiv.classList.add('item')
    newDiv.innerHTML = `
            <img src="assets/${value.assets}" alt="products">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`
    list.appendChild(newDiv)
  })
}
initApp()
function addToCard (key) {
  if (listCarts[key] == null) {
    // copy product form list to list card
    listCarts[key] = JSON.parse(JSON.stringify(products[key]))
    listCarts[key].quantity = 1
  }
  reloadCart()
}
function reloadCart () {
  listCart.innerHTML = ''
  let count = 0
  let totalPrice = 0
  listCarts.forEach((value, key) => {
    totalPrice = totalPrice + value.price
    count = count + value.quantity
    if (value != null) {
      const newDiv = document.createElement('li')
      newDiv.innerHTML = `
                <div><img src="assets/${value.assets}" alt="product"></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`
      listCart.appendChild(newDiv)
    }
  })
  netTotal.innerText = totalPrice.toLocaleString()
  quantity.innerText = count
}
function changeQuantity (key, quantity) {
  if (quantity === 0) {
    delete listCarts[key]
  } else {
    listCarts[key].quantity = quantity
    listCarts[key].price = quantity * products[key].price
  }
  reloadCart()
}
