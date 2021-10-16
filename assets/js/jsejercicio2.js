// Variable para capturar información de todos los botes de la paleta de colores
const botones = document.querySelectorAll('button')

// Cambia el color según el boton seleccionado
const cambiaColor = function () {
  document.getElementById('caja').style.backgroundColor = this.style.backgroundColor
}

// Ciclo for el cual recorre todos los botones capturados en variable botones cuando se hace click en uno de ellos y obtine su color de fondo
botones.forEach(boton => {
  boton.addEventListener('click', cambiaColor)
})