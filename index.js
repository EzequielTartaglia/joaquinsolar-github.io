const boton1 = document.querySelector(`#boton1`)
const boton2 = document.querySelector(`#boton2`)
const boton3 = document.querySelector(`#boton3`)
const boton4 = document.querySelector(`#boton4`)
const botonF = document.querySelector(`#botonF`)
const ultimoDiv = document.querySelector(`.ultimoDiv`)
const divPadre = document.querySelector(`#divPadre`)
const divFinalDeCompra = document.querySelector(`.divFinalDeCompra`)


class Productos {
    constructor(nombre,precio){
        this.nombre = nombre
        this.precio = precio
    }
}

const carrito = []

const producto1 = new Productos(`foco`,200);
const producto2 = new Productos(`destornillador`,400);
const producto3 = new Productos(`pinza`,500);
const producto4 = new Productos(`martillo`,100);


boton1.onclick = ()=>{
    carrito.push(producto1)
}

boton2.onclick = ()=>{
    carrito.push(producto2)
}

boton3.onclick = ()=>{
    carrito.push(producto3)
}

boton4.onclick = ()=>{
    carrito.push(producto4)
}

botonF.onclick = ()=>{
    divPadre.remove()    
    mostrarCarrito()
    detallesCarrito()
    totalCompra()
}


function mostrarCarrito() {
    const h1 = document.createElement(`h1`)
    h1.innerText = `CARRITO`
    divFinalDeCompra.append (h1)
}

function detallesCarrito() {
    carrito.forEach(element => {
        const parrafo = document.createElement(`p`)
        parrafo.innerText = `${element.nombre}:${element.precio}`
        divFinalDeCompra.append (parrafo)
    });
}


function totalCompra() {
    const total = carrito.reduce((num1,num2)=>(num1 + num2.precio),0)
    const parrafoTotal = document.createElement(`p`)
    parrafoTotal.innerText = `el total de tu compra es de $${total}`
    divFinalDeCompra.append (parrafoTotal)   
}