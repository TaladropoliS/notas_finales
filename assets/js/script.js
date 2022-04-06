
// var nombre = document.getElementById('nombre');
// var carrera = document.getElementById('carrera');
//
// nombre.innerHTML = prompt('Ingresa tu NOMBRE');
// carrera.innerHTML = prompt('Ingresa la CARRERA');

var html_nota_1 = (document.getElementById('html_nota_1'));
var html_nota_2 = (document.getElementById('html_nota_2'));
var html_nota_3 = (document.getElementById('html_nota_3'));

console.log(html_nota_1)

html_nota_1.innerHTML = prompt('Ingresa la nota 1 de [HTML]');
html_nota_2.innerHTML = prompt('Ingresa la nota 2 de [HTML]');
html_nota_3.innerHTML = prompt('Ingresa la nota 3 de [HTML]');

console.log(html_nota_1.innerHTML)

html_nota_1 = parseInt(html_nota_1.innerHTML)
html_nota_2 = parseInt(html_nota_2.innerHTML)
html_nota_3 = parseInt(html_nota_3.innerHTML)

console.log(html_nota_1)

var html_promedio = (html_nota_1 + html_nota_2 + html_nota_3) / 3
console.log(html_promedio)

var resultado = document.getElementById('html_promedio');
console.log(resultado)
resultado.innerHTML = html_promedio;