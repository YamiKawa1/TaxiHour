const socket = io();
const slectedBtn = {}

const reservar = (element) => {
    var selected = {};
    var a = document.getElementById(element.id).innerHTML;
     
    
    if (a == 0 ) {
        document.getElementById(element.id).innerHTML = a  
        document.getElementById(element.id).className = "btn bg-danger"  
    } else{
        a -= 1;
    document.getElementById(element.id).innerHTML = a
    selected.push([element.id = 0])
    }
    
    console.log(socket.id)
    
}
// const reservar = (element) => {
//     var a = 0;
//     var c = 0;
//     var a = document.querySelectorAll("button.btn");
//     a.forEach(x => {
//         console.log(x.innerHTML)
//     })
//     var c = parseInt(a);
     
//     console.log(a, c)
//     if (a === 0) {
//         document.querySelectorAll("button.btn").innerHTML = a    
//     }
    
//     var c = parseInt(a);
//     c -=1;
//     document.querySelectorAll("button.btn").innerHTML = c
    
// }