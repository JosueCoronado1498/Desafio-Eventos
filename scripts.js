console.log("CARRITO");

const spiderman = [
  "Amazing Fantasy",
  "Numero 15",
  "Volumen 1",
  "Fecha de Publicacion: Agosto 1962",
];

const hulk = [
  "Hulk vs Wolverine",
  "Numero 181",
  "Volumen 1",
  "Fecha de publicacion: Julio 1974",
];

let pContainer = document.getElementById ('productContainer')
let container = document.createElement ('div')
let titulo = document.createElement ('h3')
let selector = document.createElement ('select')
let button = document.createElement ('button')

//Inicio Evento primer boton
let productHulk = document.getElementById ('hulk')
let primerBoton = document.getElementById ("hulk")

primerBoton.addEventListener ('click', respuestaprimerBoton)  
function respuestaprimerBoton () {
    
    productHulk.remove()
    titulo.innerHTML = 'Ficha Tecnica'
    pContainer.appendChild (container)
    container.appendChild (titulo)
    
    for (const carac of hulk) {
        let ficha = document.createElement('li')
        ficha.innerHTML = carac
        container.appendChild(ficha)
      }

    button.innerHTML = 'COMPRAR'
    container.appendChild (button)
}
//Fin Evento primer boton

//Inicio Evento segundo boton
let productSpiderman = document.getElementById ('spiderman')
let segundoBoton = document.getElementById ('spiderman')

segundoBoton.addEventListener ('click', respuestasegundoBoton)
function respuestasegundoBoton () {
    productSpiderman.remove ()
    titulo.innerHTML = 'Ficha Tecnica'
    pContainer.appendChild (container)
    container.appendChild (titulo)

    for (const carac of spiderman) {
        let ficha = document.createElement('li')
        ficha.innerHTML = carac
        container.appendChild(ficha)
      }
      button.innerHTML = 'COMPRAR'
    container.appendChild (button)
}
//Fin Evento segundo boton