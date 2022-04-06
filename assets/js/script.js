let nombre = document.getElementById('nombre');
let carrera = document.getElementById('carrera');

nombre.innerHTML = prompt('Ingresa tu NOMBRE');
carrera.innerHTML = prompt('Ingresa la CARRERA');

let htmlNota1 = (document.getElementById('htmlNota1'));
let htmlNota2 = (document.getElementById('htmlNota2'));
let htmlNota3 = (document.getElementById('htmlNota3'));
htmlNota1.innerHTML = prompt('Ingresa la Nota 1 de [HTML]');
htmlNota2.innerHTML = prompt('Ingresa la Nota 2 de [HTML]');
htmlNota3.innerHTML = prompt('Ingresa la Nota 3 de [HTML]');
htmlNota1 = parseInt(htmlNota1.innerHTML)
htmlNota2 = parseInt(htmlNota2.innerHTML)
htmlNota3 = parseInt(htmlNota3.innerHTML)
let htmlPromedio = (htmlNota1 + htmlNota2 + htmlNota3) / 3
let htmlResultado = document.getElementById('htmlPromedio');
htmlResultado.innerHTML = htmlPromedio.toFixed(1).toString();

let cssNota1 = (document.getElementById('cssNota1'));
let cssNota2 = (document.getElementById('cssNota2'));
let cssNota3 = (document.getElementById('cssNota3'));
cssNota1.innerHTML = prompt('Ingresa la Nota 1 de [CSS]');
cssNota2.innerHTML = prompt('Ingresa la Nota 2 de [CSS]');
cssNota3.innerHTML = prompt('Ingresa la Nota 3 de [CSS]');
cssNota1 = parseInt(cssNota1.innerHTML)
cssNota2 = parseInt(cssNota2.innerHTML)
cssNota3 = parseInt(cssNota3.innerHTML)
let cssPromedio = (cssNota1 + cssNota2 + cssNota3) / 3
let cssResultado = document.getElementById('cssPromedio');
cssResultado.innerHTML = cssPromedio.toFixed(1).toString();

let jsNota1 = (document.getElementById('jsNota1'));
let jsNota2 = (document.getElementById('jsNota2'));
let jsNota3 = (document.getElementById('jsNota3'));
jsNota1.innerHTML = prompt('Ingresa la Nota 1 de [JS]');
jsNota2.innerHTML = prompt('Ingresa la Nota 2 de [JS]');
jsNota3.innerHTML = prompt('Ingresa la Nota 3 de [JS]');
jsNota1 = parseInt(jsNota1.innerHTML)
jsNota2 = parseInt(jsNota2.innerHTML)
jsNota3 = parseInt(jsNota3.innerHTML)
let jsPromedio = (jsNota1 + jsNota2 + jsNota3) / 3
let jsResultado = document.getElementById('jsPromedio');
jsResultado.innerHTML = jsPromedio.toFixed(1).toString();
