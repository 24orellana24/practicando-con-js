// Definición de variables, capturando la información de los botones suma y resta
const btnSuma = document.getElementById('btn-sumar')
const btnResta = document.getElementById('btn-restar')

// Acción que se realiza al momento de hacer click a los botones, llamando la respectiva función de suma o resta.
btnSuma.addEventListener('click', miSuma)
btnResta.addEventListener('click', miResta)

// Realiza la suma, validando que los campos contengan números y no se encuentren vacios.
function miSuma () {
  const num1 = parseFloat(document.getElementById('valor1').value)
  const num2 = parseFloat(document.getElementById('valor2').value)
  const total = num1 + num2

  if (/[0-9]/.test(total)) {
    document.querySelector('.resultado').innerHTML = total.toFixed(2)
    document.querySelector('.resultado').style.color = 'blue'
  } else {
    mError()
  }
  
}

// Realiza la resta, validando que los campos contengan números y no se encuentren vacios.
function miResta () {
  const num1 = parseFloat(document.getElementById('valor1').value)
  const num2 = parseFloat(document.getElementById('valor2').value)
  const total = num1 - num2

  if (/[0-9]/.test(total)) {
    if (total >= 0) {
      document.querySelector('.resultado').innerHTML = total.toFixed(2)
      document.querySelector('.resultado').style.color = 'blue'
    } else {
      document.querySelector('.resultado').innerHTML = '0.00'
    }
  } else {
    mError()
  }
  
}

// Mensaje de erro que arroja cuando no se ha ingresado algún número.
function mError () {
  document.querySelector('.resultado').innerHTML = '¡¡¡dato erroneo o falta!!!'
  document.querySelector('.resultado').style.color = 'red' 
}