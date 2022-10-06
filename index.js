//Traer la dependencia de del

import materias from './materias.js'

//1. recorrido de arrelgo: ForEach
materias.forEach((materia)=> {
    if(materia.profesor ==='Cristian Buitrago'){
    console.log(`materia: ${materia.name}`)
    console.log(`notas: ${materia.ratings}`)
}
})

//2. Convertir a un arreglo de profesores
// metodo map()
let profesores = materias.map(function(materia){
    return materia.teacher
})

//3.  agregar una materia al arreglo de materia
// push()

materias.push(
    {
        id: 4,
        name: "Cultura Fisica",
        teacher: "Luis Baquero",
        ratings:[
            2.0,
            4.0
        ]
    }
)

//4. Busqueda en arreglos: 
//find 
const PHP = materias.find(function(materia){
    return materia.profesor === 'Cristian Buitrago'
})

console.log(PHP)

