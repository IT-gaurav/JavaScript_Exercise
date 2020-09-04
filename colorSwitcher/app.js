const boxes = document.querySelectorAll('.box')

boxes.forEach(div => {
    div.onclick = () => {

        div.classList.add('black')
    }
})

