var num1 = 0
var num2 = 0

function num(){
    num1 = Number(document.querySelector('#num1').value)
    num2 = Number(document.querySelector('#num2').value)
}

function soma(){
    num()
     result = (num1 + num2)
    document.querySelector('#result').innerHTML = `${result}`
}

function subt(){
    num()
    result = (num1 - num2)
   document.querySelector('#result').innerHTML = `${result}`
}

function mult(){
    num()
    result = (num1 * num2)
   document.querySelector('#result').innerHTML = `${result}`
}

function divi(){
    num()
    result = (num1 / num2)
   document.querySelector('#result').innerHTML = `${result}`
}