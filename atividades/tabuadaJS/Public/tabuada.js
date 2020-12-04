const btn = document.querySelector('input#gen')
btn.addEventListener('click', tabuada)


function tabuada(){
    let n = Number(document.querySelector('input#number').value)

    for(let i = 1; i <=10; i++){
        document.write(`${n} x ${i} = ${n*i}<br>`)
    }
        document.write('<a href = index.html>Limpar</a>')
}
