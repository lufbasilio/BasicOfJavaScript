function soma(){
    let n1 = Number(document.querySelector('input#numero1').value)
    let n2 = Number(document.querySelector('input#numero2').value)
    let result = document.querySelector('span#result')

    let s = n1 + n2

    result.innerHTML = `O resultado de ${n1} + ${n2} é ${s}`
}

function subtracao(){
    let n1 = Number(document.querySelector('input#numero1').value)
    let n2 = Number(document.querySelector('input#numero2').value)
    let result = document.querySelector('span#result')

    let s = n1 - n2

    result.innerHTML = `O resultado de ${n1} - ${n2} é ${s}`
}

function multiplicacao(){
    let n1 = Number(document.querySelector('input#numero1').value)
    let n2 = Number(document.querySelector('input#numero2').value)
    let result = document.querySelector('span#result')

    let s = n1 * n2

    result.innerHTML = `O resultado de ${n1} x ${n2} é ${s}`
}

function divisao(){
    let n1 = Number(document.querySelector('input#numero1').value)
    let n2 = Number(document.querySelector('input#numero2').value)
    let result = document.querySelector('span#result')

    let s = n1 / n2

    result.innerHTML = `O resultado de ${n1} / ${n2} é ${s}`
}

function potencia(){
    let n1 = Number(document.querySelector('input#numero1').value)
    let n2 = Number(document.querySelector('input#numero2').value)
    let result = document.querySelector('span#result')

    let s = Math.pow(n1, n2)

    result.innerHTML = `O resultado de ${n1} ^ ${n2} é ${s}`
}

function hipotenusa(){
    let n1 = Number(document.querySelector('input#numero1').value)
    let n2 = Number(document.querySelector('input#numero2').value)
    let result = document.querySelector('span#result')

    let s = Math.hypot(n1, n2)

    result.innerHTML = `A hipotenusa de ${n1} e ${n2} é ${s}`
}

function maiorque(){
    let n1 = Number(document.querySelector('input#numero1').value)
    let n2 = Number(document.querySelector('input#numero2').value)
    let result = document.querySelector('span#result')

    let s = Math.max(n1, n2)

    result.innerHTML = `${s} é maior`
}

function menorque(){
    let n1 = Number(document.querySelector('input#numero1').value)
    let n2 = Number(document.querySelector('input#numero2').value)
    let result = document.querySelector('span#result')

    let s = Math.min(n1, n2)

    result.innerHTML = `${s} é menor`
}