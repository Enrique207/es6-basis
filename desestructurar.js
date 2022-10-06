let colors = require('colors');
const estudiantes1 = ["Kike" , 
                    "Son Goku" , 
                    "Son Gohan" ,
                    "Son Goten"];

const estudiantes2 =[
                    "Broly",
                    "Krillin",
                    "Androide 17",
                    "Frieza",
                    "Piccolo"
                    ]

//operador spread(resto)
const estudiantes3 =[
                    'Vegeta', 
                    ...estudiantes1, 
                    'Trunks', 
                    ...estudiantes2,
                    'Androide 18']
console.log(estudiantes3)

