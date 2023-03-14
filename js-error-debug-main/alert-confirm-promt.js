const print = async (val) => {
    console.log(val)
}

// Task-1 
const showAlert = async () => {
    alert("Hello sir!!")
}
const showConfirm = async () => {
    confirm("Please Confirm it sir!!")
}
const showPrompt = async () => {
    prompt("Input Your Name sir!!")
}

// Task-2

const showAll = () =>{
    const key = document.getElementById('keyItems')
    const val = document.getElementById('valItems')
    const key_it = key.value
    const val_it = val.value
    
    key.value = ''
    val.value = ''
    allItems(key_it,val_it)
    savetoLS(key_it,val_it)
}

const allItems = (keys,vals) =>{
    const ul = document.getElementById('LSItems')
    const list = document.createElement('li')
    list.innerHTML = `${keys} : ${vals}`
    ul.appendChild(list)  
}
const getSaveCart = () =>{
    let cart = {};
    const savedCart = localStorage.getItem('cart')
    if(savedCart)
    {
        cart = JSON.parse(savedCart)
    }
    return cart
}
const savetoLS = (key,val) =>{
    const cart = getSaveCart();
    cart[key] = val
    const cartString = JSON.stringify(cart)
    localStorage.setItem('cart' , cartString)
}

const DisplayCart = () =>{
    const savedCart = getSaveCart()
    for(product in savedCart)
    {
        const values = savedCart[product]
        allItems(product,values)
    }
}
DisplayCart()

// Task-3
const incre = () =>{
    const num = document.getElementById('count').innerText
    let x = 1 + parseInt(num)
    document.getElementById('count').innerText = x
    saveLSNum(x)
}

const getLSNum = () =>{
    let num = '0'
    const savedNum = localStorage.getItem('num')
    if(savedNum)
    {
        num = JSON.parse(savedNum)
    }
    return num
}
const saveLSNum = (num) =>{
    let val = getLSNum()
    val = num
    localStorage.setItem('num',val)
}

const displayNum = () =>{
    let num = getLSNum()
    document.getElementById('count').innerText = num
}

displayNum()