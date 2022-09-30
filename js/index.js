const boton1 = document.querySelector(`#boton1`)
const boton2 = document.querySelector(`#boton2`)
const boton3 = document.querySelector(`#boton3`)
const boton4 = document.querySelector(`#boton4`)
const botonF = document.querySelector(`#botonF`)
const ultimoDiv = document.querySelector(`.ultimoDiv`)
const divPadre = document.querySelector(`#divPadre`)
const divFinalDeCompra = document.querySelector(`.divFinalDeCompra`)

//creacion de productos
class Productos {
    constructor(nombre,precio){
        this.nombre = nombre
        this.precio = precio
    }
}

const carrito = []

const producto1 = new Productos(`foco`,20.00);
const producto2 = new Productos(`destornillador`,80.00);
const producto3 = new Productos(`pinza`,40.00);
const producto4 = new Productos(`martillo`,120.00);

//eventos de botones
boton1.onclick = ()=>{
    carrito.push(producto1)
    const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
Toast.fire({
  icon: 'success',
  title: 'agregando al carrito'
})
}

boton2.onclick = ()=>{
    carrito.push(producto2)
    const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
Toast.fire({
  icon: 'success',
  title: 'agregando al carrito'
})
}

boton3.onclick = ()=>{
    carrito.push(producto3)
    const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
Toast.fire({
  icon: 'success',
  title: 'agregando al carrito'
})
}

boton4.onclick = ()=>{
    carrito.push(producto4)
    const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
Toast.fire({  
  icon: 'success',
  title: 'agregando al carrito'
})
}

botonF.onclick = ()=>{
    divPadre.remove()    
    mostrarCarrito()
    detallesCarrito()
    totalCompra()
    volver ()
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Felicidades! compra finalizada',
        showConfirmButton: false,
        timer: 1500
      })
}


//funciones para el carrito
function mostrarCarrito() {
  const h1 = document.createElement(`h1`)
  h1.setAttribute(`id`,`h1`)
  h1.innerText = `CARRITO`
  divFinalDeCompra.append (h1)
}

function detallesCarrito() {
  carrito.forEach(element => {
    const parrafo = document.createElement(`p`)
    parrafo.setAttribute(`id`,`parrafoC`)
    parrafo.innerText = `${element.nombre}:${element.precio}`
    divFinalDeCompra.append (parrafo)
  });
}

function totalCompra() {
  const total = carrito.reduce((num1,num2)=>(num1 + num2.precio),0)
  const parrafoTotal = document.createElement(`p`)
  parrafoTotal.setAttribute(`id`,`parrafoTotal`)
  parrafoTotal.innerText = `el total de tu compra es de $${total}`
  divFinalDeCompra.append (parrafoTotal)   
}

function volver() {
  const botonVolver = document.createElement(`a`)
  botonVolver.setAttribute(`href`,`index.html`)
  botonVolver.setAttribute(`id`,`volver`)
  botonVolver.innerText = `Volver`
  divFinalDeCompra.append (botonVolver)
}



//PARA LA ENTREGA DE HOY

let paraStorage ={
  nombre: "joaquin",
  apelldo: "Solar",
  edad: 20,
}

localStorage.setItem("persona", JSON.stringify(paraStorage))