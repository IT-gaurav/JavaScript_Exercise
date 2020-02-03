const boxes = document.querySelectorAll('.box')

// function cl(div) {

//     if (!div.classList.contains('black')) {
//         div.classList.add('black')
//     } else {
//         div.classList.remove('black')
//     }
// }



boxes.forEach(div => {
    div.onclick = () => {

        if (!div.classList.contains('black')) {
            div.classList.add('black')
        } else {
            div.classList.remove('black')
        }
    }
})



// boxes.forEach(e => {
//     e.onclick = () => { e.style.background = "black" };
// });
// boxes[].onclick = () => { boxes[e].style.background = "black" };
