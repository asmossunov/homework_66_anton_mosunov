
const divs = document.getElementsByTagName('div')
let out_01 = document.querySelector('.task_01_out')

out_01.innerHTML += '<br>Правильный ответ:<br>'

console.log(divs[2].innerText)
out_01.innerHTML += divs[2].innerText + '<br>'
console.log(divs[4].innerText)
out_01.innerHTML += divs[4].innerText + '<br>'
console.log(divs[1].innerText)
out_01.innerHTML += divs[1].innerText + '<br>'
console.log(divs[5].innerText)
out_01.innerHTML += divs[5].innerText + '<br>'
console.log(divs[3].innerText)
out_01.innerHTML += divs[3].innerText + '<br>'
console.log(divs[0].innerText)
out_01.innerHTML += divs[0].innerText + '<br>'
