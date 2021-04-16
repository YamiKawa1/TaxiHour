const socket = io();

const element = document.getElementsByClassName('btn');

const ref = [
    {
    clicked: false,
    },
    {
    clicked: false,
    },
    {
    clicked: false,
    },
    {
    clicked: false,
    },
    {
    clicked: false,
    },    
    {
    clicked: false,
    },
    {
    clicked: false,
    },
    {
    clicked: false,
    },
    {
    clicked: false,
    },
    {
    clicked: false,
    },   
    {
    clicked: false,
    },
    {
    clicked: false,
    },
    {
    clicked: false,
    },
    {
    clicked: false,
    },
    {
    clicked: false,
    },    
    {
    clicked: false,
    },
    {
    clicked: false,
    },
    {
    clicked: false,
    },
    {
    clicked: false,
    },
    {
    clicked: false,
    },   
    {
    clicked: false,
    },
    {
    clicked: false,
    },
    {
    clicked: false,
    },
    {
    clicked: false,
    }   
]

console.log(ref[0].clicked);
for(let i = 0; i < element.length; i++){
        element[i].addEventListener("click", ()=>{
            socket.emit('click', i);

            socket.on('click', i => {

                if (ref[i].clicked == false) {
                element[i].innerHTML = parseInt(element[i].innerHTML) - 1
                
                ref[i].clicked = true
                }else{
                element[i].innerHTML = parseInt(element[i].innerHTML) + 1
                
                ref[i].clicked = false
            }
            console.log(element[i]); 

            });

    });
}





// element.addEvent

// const reservar = (element) => {
//     socket.emit('reserve', element.id);

//     socket.on('reserve', option => {
//         var a = document.getElementById(element.id).innerHTML;
//         a = parseInt(a)
//         if (option){
//             document.getElementById(element.id).innerHTML = a + 1;
//             console.log('ya seleccionado');
//         } else {
//             document.getElementById(element.id).innerHTML = a - 1;
//             console.log('no seleccionado todavia');
//         }
//     })
 
    
    