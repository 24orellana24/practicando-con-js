// Variable para capturar información del botón enviar formulario
let clickBoton = document.getElementById('botton')

// Acción que se realiza al hacer click en el botón, donde se llama la función para validar el formulario
clickBoton.addEventListener('click', validaFormulario)

// Función para validar el formulario
function validaFormulario(e) {

  let vNombre = true
  let vAsunto = true
  let vMensaje = true

  let validaNombre = document.getElementById('nombre').value
  if (/^[A-Za-z\s]+$/.test(validaNombre)) {
    document.querySelector('.errorNombre').innerHTML = ''    
  } else {
    document.querySelector('.errorNombre').innerHTML = 'El nombre es requerido | Ingresar solo letras'
    vNombre = false
  }

  let validaAsunto = document.getElementById('asunto').value
  if (/^[A-Za-z\s]+$/.test(validaAsunto)) {
    document.querySelector('.errorAsunto').innerHTML = ''    
  } else {
    document.querySelector('.errorAsunto').innerHTML = 'El asunto es requerido | Ingresar solo letras'
    vAsunto = false
  }
  
  let validaMensaje = document.getElementById('mensaje').value
  if (/^[A-Za-z\s]+$/.test(validaMensaje)) {
    document.querySelector('.errorMensaje').innerHTML = ''    
  } else {
    document.querySelector('.errorMensaje').innerHTML = 'El mensaje es requerido | Ingresar solo letras'
    vMensaje = false
  }

  if ((vNombre) && (vAsunto) && (vMensaje)) {
    document.querySelector('.resultado').innerHTML = '¡¡¡Felicitaciones!!!... formulario enviado...'
    e.preventDefault()
  }  else {
    document.querySelector('.resultado').innerHTML = ''
    e.preventDefault()
  }

}
