const input = document.querySelector('.inp');
const form = document.querySelector('form');
const notes = document.querySelector('.notes');
const header = `
        <div class="content">
            <div>
                `
const footer = ` </div>
            <input type="checkbox">
`


form.addEventListener("submit", click)

function click(event) {
    event.preventDefault();
    document.querySelector('.notes').innerHTML += header + input.value + footer;
}




notes.contains() = form 