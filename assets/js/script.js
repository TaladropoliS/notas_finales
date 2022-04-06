var nombre = document.getElementById('nombre');
var carrera = document.getElementById('carrera');

nombre.innerHTML = prompt('Ingresa tu NOMBRE');
carrera.innerHTML = prompt('Ingresa la CARRERA');

var html_nota_1 = (document.getElementById('html_nota_1'));
var html_nota_2 = (document.getElementById('html_nota_2'));
var html_nota_3 = (document.getElementById('html_nota_3'));
html_nota_1.innerHTML = prompt('Ingresa la nota 1 de [HTML]');
html_nota_2.innerHTML = prompt('Ingresa la nota 2 de [HTML]');
html_nota_3.innerHTML = prompt('Ingresa la nota 3 de [HTML]');
html_nota_1 = parseInt(html_nota_1.innerHTML)
html_nota_2 = parseInt(html_nota_2.innerHTML)
html_nota_3 = parseInt(html_nota_3.innerHTML)
var html_promedio = (html_nota_1 + html_nota_2 + html_nota_3) / 3
var html_resultado = document.getElementById('html_promedio');
html_resultado.innerHTML = html_promedio.toFixed(1).toString();

var css_nota_1 = (document.getElementById('css_nota_1'));
var css_nota_2 = (document.getElementById('css_nota_2'));
var css_nota_3 = (document.getElementById('css_nota_3'));
css_nota_1.innerHTML = prompt('Ingresa la nota 1 de [CSS]');
css_nota_2.innerHTML = prompt('Ingresa la nota 2 de [CSS]');
css_nota_3.innerHTML = prompt('Ingresa la nota 3 de [CSS]');
css_nota_1 = parseInt(css_nota_1.innerHTML)
css_nota_2 = parseInt(css_nota_2.innerHTML)
css_nota_3 = parseInt(css_nota_3.innerHTML)
var css_promedio = (css_nota_1 + css_nota_2 + css_nota_3) / 3
var css_resultado = document.getElementById('css_promedio');
css_resultado.innerHTML = css_promedio.toFixed(1).toString();

var js_nota_1 = (document.getElementById('js_nota_1'));
var js_nota_2 = (document.getElementById('js_nota_2'));
var js_nota_3 = (document.getElementById('js_nota_3'));
js_nota_1.innerHTML = prompt('Ingresa la nota 1 de [JS]');
js_nota_2.innerHTML = prompt('Ingresa la nota 2 de [JS]');
js_nota_3.innerHTML = prompt('Ingresa la nota 3 de [JS]');
js_nota_1 = parseInt(js_nota_1.innerHTML)
js_nota_2 = parseInt(js_nota_2.innerHTML)
js_nota_3 = parseInt(js_nota_3.innerHTML)
var js_promedio = (js_nota_1 + js_nota_2 + js_nota_3) / 3
var js_resultado = document.getElementById('js_promedio');
js_resultado.innerHTML = js_promedio.toFixed(1).toString();
