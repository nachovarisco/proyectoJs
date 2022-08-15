



// d



// let imput1 = document.getElementsByid ("nombre")
// input1.adddEventListener ('input', () =>  {console.log (input1.value)
// })



// const infoHuespedes = [];
 
// let nombreHuesped = document.getElementById ("nombre-r");
// let emailHuesped = document.getElementById ("email-r");
// let dniHuesped = document.getElementById ("dni-r");
// let cantidadHuesped = document.getElementById ("huespedes-r");
// let noches = document.getElementById ("noches-r")

// infoHuespedes.push (nombreHuesped, emailHuesped, dniHuesped, cantidadHuesped, noches)



// nombreHuesped.onchange = ()=> {console.log(nombreHuesped)};
// emailHuesped.onchange = ()=> {console.log(emailHuespede)};
// dniHuesped.onchange = ()=> {console.log(dniHuesped)};
// cantidadHuesped.onchange = ()=> {console.log(cantidadHuesped)};
// noches.onchange = ()=> {console.log(noches)};


// const infoHuespedes = [];

// let nombreHuesped = document.getElementById ("nombre");
// let emailHuesped = document.getElementById ("email");
// let dniHuesped = document.getElementById ("dni");
// let cantidadHuesped = document.getElementById ("huespedes");
// let noches = document.getElementById ("noches");
// let formulario



// formulario =document.getElementById ("nombre-r").innerHTML += `
// <div class="row">
//   <div class="col-25">
//     <label for="lname">Nombre</label>
//   </div>
//   <div class="col-75">
//     <input type="text" name="nombre completo" placeholder="Nombre completo">
//   </div>
// </div> <div class="row">
//   <div class="col-25"></div>
// `


// formulario =document.getElementById ("email-r").innerHTML += `
// <div class="row">
//   <div class="col-25">
//     <label for="lname">email</label>
//   </div>
//   <div class="col-75">
//     <input type="text" name="email" placeholder="email">
//   </div>
// </div> <div class="row">
//   <div class="col-25"></div>
// `

// formulario =document.getElementById ("dni-r").innerHTML += `

// <div class="row">
// <div class="col-25">
//   <label for="lname">DNI</label>
// </div>
// <div class="col-75">
//   <input type="text"  name="dni" placeholder="DNI">
// </div>
// </div> <div class="row">
// <div class="col-25"></div>
// `


// formulario =document.getElementById ("cant-huespedes-r").innerHTML += `

// <div class="row">
// <div class="col-25">
//   <label for="lname">huespedes</label>
// </div>
// <div class="col-75">
//   <input type="text"  name="cantidad de huespedes" placeholder="canitdad de huespedes">
// </div>
// </div> <div class="row">
// <div class="col-25"></div>
// `
// formulario =document.getElementById ("noches-r").innerHTML += `

// <div class="row">
// <div class="col-25">
//   <label for="lname">noches </label>
// </div>
// <div class="col-75">
//   <input type="text"  name="cantidad de noches a hospedarse" placeholder="cantidad de noches a hospedarse">
// </div>
// </div> <div class="row">
// <div class="col-25"></div>
// `



// nombreHuesped= document.getElementById ("nombre-r")

// console.log (nombreHuesped)





// infoHuespedes.push


let registroHuesped = []


let nombre
let email
let dni
let huespedes
let noches


function infoHuespedes (){
nombre = document.getElementById ("nombre-r").value;
console.log (nombre)

email =document.getElementById ("email-r").value;
console.log (email)

dni =document.getElementById ("dni-r").value;
console.log (dni)

huespedes =parseInt(document.getElementById ("huespedes-r").value);
console.log (huespedes)

noches =parseInt(   document.getElementById ("noches-r").value);
console.log (noches) 




registroHuesped.push (nombre , email , dni , huespedes , noches )

console.log(registroHuesped) 

// funciona

swal({
  title: "¿Son sus datos ingresados los correctos?",
  text: "NOMBRE: " + nombre + "\n EMAIL: " + email + "\n DNI: " + dni + "\n Cantidad de Huespedes: " + huespedes + "\n Cantidad de noches a hospedarse: " + noches,
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Sus datos fueron ingresados con exito", {
      icon: "success",
    });
  } else {
    swal("Por favor, reinicie la pagina y complete el formulario de nuevo ");
  }
});
}

// esto esta bien (agregar sweet alert)

function calcularPrecio (){

 

let cantidadDeHuespedes =registroHuesped[3];
let nocheEstadia = registroHuesped[4];
 const precio = 2500
 let precioFinal = cantidadDeHuespedes*precio*nocheEstadia;
 console.log (precioFinal);
 alert ("el precio final de su estadia seria de: $"+precioFinal);



JSON.stringify(localStorage.setItem ('personas', (cantidadDeHuespedes)));
JSON.stringify(localStorage.setItem ('noches', (nocheEstadia)));
JSON.stringify(localStorage.setItem ('precioFinal', (precioFinal)));





document.getElementById ("precio-f").innerHTML = `<div class="text-center"> precio final por: ${localStorage.getItem ('noches')}  noches y  ${localStorage.getItem ('personas')}  personas, es: $ARS${localStorage.getItem ('precioFinal')}</div>`



}

