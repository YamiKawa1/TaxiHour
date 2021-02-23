const socket = io();

const reservar = () => {
    const a = document.querySelector('button.btn').innerHTML;
    var c = parseInt(a);
    c -=1;
    document.querySelector("button.btn").innerHTML = c
    
}