const boxes = document.querySelectorAll('.red');

// boxes.forEach(element => {
//     element.style.backgroundColor = "red"
// });



// const boxes = document.querySelectorAll('.box')

boxes.forEach(div => {
    div.onclick = () => {
        div.classList.add('yellow')

    }
})

