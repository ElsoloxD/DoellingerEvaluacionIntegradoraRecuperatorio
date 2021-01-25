
let title = document.getElementById('titulo2')

title.style.color = 'rgb(136, 255, 0)'

var changeColor = document.getElementById("h1")

var object1 = document.getElementById('sect4')

var colors = ["Azul/Violeta/Verde/Amarillo/Rojo/Naranja/Cyan"]

var colorQuestion = prompt("¿Que color quiere para el titulo de la pagina?"+colors)

var curso = confirm('¿Quiere que se le muestren opciones de cursos gratuitos?');



colorQuestion = colorQuestion.toLowerCase()

if (curso == false){
    console.log('funciona')
    object1.style.display = 'none'
}



//<<<<<<<<<<<<<<<<<<<<<<<PROMPT<<<<<<<<<<<<<<<<<<<<<<<

//<<<<<<<<<<<<<AZUL<<<<<<<<<<<<<<<<<
if (colorQuestion == "azul"){
    
    changeColor.style.color = "blue"
}
//<<<<<<<<<<<<<VIOLETA<<<<<<<<<<<<<<<<<
if (colorQuestion == "violeta"){
    
    changeColor.style.color = "violet"
}
//<<<<<<<<<<<<<VERDE<<<<<<<<<<<<<<<<<
if (colorQuestion == "verde"){
    
    changeColor.style.color = "green"
}
//<<<<<<<<<<<<<AMARILLO<<<<<<<<<<<<<<<<<
if (colorQuestion == "amarillo"){
    
    changeColor.style.color = "yellow"
}
//<<<<<<<<<<<<<ROJO<<<<<<<<<<<<<<<<<
if (colorQuestion == "rojo"){
  
    changeColor.style.color = "red"
}
//<<<<<<<<<<<<<NARANJA<<<<<<<<<<<<<<<<<
if (colorQuestion == "naranja"){
    
    changeColor.style.color = "orange"
}
//<<<<<<<<<<<<<CYAN<<<<<<<<<<<<<<<<<
if (colorQuestion == "cyan"){
    
    changeColor.style.color = "cyan"
}



//var lenguajesProgramacion = ['PHP','HTML','CSS','JavaScript','Java','MongoDB','NodeJS'] 

//var h2 = document.createElement('h2')

//contenido = document.createTextNode(lenguajesProgramacion)

//h2.appendChild(contenido)

//document.getElementById('pruebaa__').appendChild(h2)


/*const d = document

const jslist = d.getElementById('langList')

const titleForjs = d.getElementById('titlejs')


const itemlist = d.createElement('li')
itemlist.textContent = 'lunes'

jslist.appendChild(itemlist)

console.log(itemlist)*/

