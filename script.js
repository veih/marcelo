// ajudadores para ocultar e mostrar elementos

const card = (e) => document.querySelector(e);
const cards = (e) => document.querySelectorAll(e);

pizzaJson.map((pizza, index) => {
    let pizzaItem = card('.models .pizza-item').cloneNode(true);

    //preenchendo os dados da pizzaitem
    pizzaItem.querySelector('.pizza-item--img img').src = pizza.img;

    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${pizza.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = pizza.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = pizza.description;

    card('.pizza-area').append(pizzaItem);
});