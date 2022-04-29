// ajudadores para ocultar e mostrar elementos

const card = (e) => document.querySelector(e);
const cards = (e) => document.querySelectorAll(e);

pizzaJson.map((pizza, index) => {
    let pizzaItem = card('.models .pizza-item').cloneNode(true);

    //preenchendo os dados da pizzaitem
    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = pizza.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${pizza.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = pizza.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = pizza.description;
    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        //modal
        card('.pizzaBig img').src = pizzaJson[key].img;
        card('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        card('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        card('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;

        cards('.pizzaInfo--size').forEach((size, sizeIndex) => {
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });

        card('.pizzaWindowArea').style.opacity = 0;
        card('.pizzaWindowArea').style.display = 'flex';
        setTimeout(() => {  
           card('.pizzaWindowArea').style.opacity = 1; 
        }, 200);
        
    });

    card('.pizza-area').append(pizzaItem);
});