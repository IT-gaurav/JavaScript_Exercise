// variables
const boxes = document.querySelectorAll('.All');
const category = document.querySelectorAll('.category');
const cart = document.querySelector('.cart');
const cartBtn = cart.querySelectorAll('button')
const removeBtn = document.getElementsByClassName('.RBtn');
const searchBox = document.querySelector('.search')

// console.log(cartBtn);

// add to cart
boxes.forEach(div => {
    div.onclick = () => {
        cart.innerHTML += div.innerHTML;
        // console.log(cart.getElementsByClassName('AddBtn'));

        cart.innerHTML += '<button type="submit" class="RBtn" onclick="Rm(this)">Remove from cart</button>'
        const b = cart.getElementsByClassName('AddBtn');

        // hiding the add to cart button after adding the object in cart
        for (let i = 0; i < b.length; i++) {
            b[i].classList.add('hide')
        }
        // .classList.add('hide');


    }
})

// category filter

category.forEach(e => {
    e.onclick = () => {

        boxes.forEach(element => {
            element.classList.remove('hide')
            if (!element.classList.contains(e.innerText)) {
                element.classList.add('hide');
            }
        });

    }
});


// remove item from cart

// function Rm() {
//     // console.log(this);
//     console.log(this.children);





// search box




// if (!(
//     boxes.forEach(element => {
//         element.onkeyup
//     });
// innerHTML.contains(searchBox.value)
// )) {
//     boxes.forEach(element => {
//         element.classList.add('hide')
//     });
// }

