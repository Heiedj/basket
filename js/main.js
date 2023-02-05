'use strict'
let cart = [];
//класс товара
class Item {
    constructor(name, price, img){
        this.name = name;
        this.price = price;
        this.img = img;
        this.count = 1;
    }
}

let butAddCart = document.querySelectorAll('.card .btn-primary');
butAddCart.forEach(item => item.addEventListener('click', toAddCart));
function toAddCart(event){
    let parent = event.target.closest('.card');
    let name = parent.querySelector('.card-title').innerText;
    let price = parseInt(parent.querySelector('.price').innerText.split(' ').join(''));
    let img = parent.querySelector('img').getAttribute('src');
    let elem = cart.find(item => item.name == name);
    // console.dir(elem);
    if(elem){
        elem.count++;
    }else{
        cart.push(new Item(name, price, img))
    }
}
let cartOpen = document.querySelector('.cart-open');
cartOpen.addEventListener('click', toRender);
let a = '';
let sum = 0;
let i = [];
function toRender(){
    let cartTable = document.querySelector('.cart-table');
    let tBody = cartTable.querySelector('tbody');
    tBody.innerHTML = '';
    cart.forEach((item, index) =>{
        tBody.insertAdjacentHTML('beforeend', `
            <tr>
            <td id = 'numder'>${index+1}</td>
            <td>${item.name}</td>
            <td><img src=${item.img}></td>
            <td>${item.price}</td>
            <td>${item.count}</td>
            <td id = 'sum'>${item.count * item.price}</td>
            <td></td>
            </tr>
        `)
        a = `${item.count * item.price}`;
        a = +a;
        i.push(a);
    })
    i.forEach(item => sum = item + sum);
    let cartsumn = document.querySelector('.cart-sum');
    cartsumn.innerText = '';
    cartsumn.innerText =`${sum}`;
    i = [];
    sum = 0;

}


