let cart = [];
let modalQt = 1;
let modalKey = 0;

// ajudadores para ocultar e mostrar elementos

const card = (e) => document.querySelector(e);
const cards = (e) => document.querySelectorAll(e);
//listagens das pizzas
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
        modalQt = 1;
        modalKey = key;

        card('.pizzaBig img').src = pizzaJson[key].img;
        card('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        card('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        card('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;

        card('.pizzaInfo--size.selected').classList.remove('selected');

        cards('.pizzaInfo--size').forEach((size, sizeIndex) => {
            if (sizeIndex == 2) {
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });

        card('.pizzaInfo--qt').innerHTML = modalQt;

        card('.pizzaWindowArea').style.opacity = 0;
        card('.pizzaWindowArea').style.display = 'flex';
        setTimeout(() => {
            card('.pizzaWindowArea').style.opacity = 1;
        }, 200);

    });

    card('.pizza-area').append(pizzaItem);
});

//eventos para ocultar e mostrar o modal
const closeModal = () => {
    card('.pizzaWindowArea').style.opacity = 0;
    setTimeout(() => {
        card('.pizzaWindowArea').style.display = 'none';
    }, 500);
}

cards('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((pizza) => {
    pizza.addEventListener('click', closeModal);
});

card('.pizzaInfo--qtmenos').addEventListener('click', () => {
    if (modalQt > 1) {
        modalQt--;
        card('.pizzaInfo--qt').innerHTML = modalQt;
    }
});

card('.pizzaInfo--qtmais').addEventListener('click', () => {
        modalQt++;
        card('.pizzaInfo--qt').innerHTML = modalQt;

});

card('.pizzaInfo--addButton').addEventListener('click', () => {
    let size = parseInt(card('.pizzaInfo--size.selected').getAttribute('data-key'));
    cart.push({
        id: pizzaJson[modalKey].id,
        size: size,
        qt: modalQt,
    });
    closeModal();
});