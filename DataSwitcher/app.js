const inner = document.querySelector('.content');
// const outer = document.querySelector('.container');
const btn = document.querySelector('button');
//let counter = [1, 2, 3, 4, 5, 6, 7]
let counter = []

for (let i = 0; i < 32; i++) {
    counter[i] = '(' + (i + 1) + ').jpg';

}
console.log(counter[0]);

counter[0] = 'index.html'
console.log(counter[0]);

// inner.style.display = "none"

console.log(counter);

let i = 0;
btn.onclick = () => {
    if (i < (counter.length)) {
        inner.innerHTML = (`<img src='./img/${counter[i]}'>`);

        // inner.innerHTML = "<img src=\'" + counter[i] + "\' > "
        // console.log(inner.innerHTML = "<img src=\'" + counter[i] + "\' > ";)

        // inner.innerText = counter[i];
        i++;
        if (!inner.classList.contains('ani')) {
            inner.classList.add('ani')
        } else {
            inner.classList.remove('ani')
            setTimeout(() => {
                inner.classList.add('ani')
            }, 600)
        }
    }
    else {
        i = 0
        inner.innerText = counter[i];
        i++;
        if (!inner.classList.contains('ani')) {
            inner.classList.add('ani')
        } else {
            inner.classList.remove('ani')
            setTimeout(() => {
                inner.classList.add('ani')
            }, 600)
        }
    }
}

// btn.onclick = () => {
//     inner.classList.add = "animate"
//     inner.style.display = "block"

// }



