const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

const c = canvas.getContext('2d');
var colors = ["blue", "red", "green", "indigo", "orangered", "white", "black", "purple", "gray", "coral"];
// c.fillRect(100, 100, 100, 100);


for (let i = 0; i < 400; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 10, 0, Math.PI * 2, false);
    var z = (Math.random() * 10).toFixed(0);
    c.strokeStyle = colors[z]
    c.stroke();
}
