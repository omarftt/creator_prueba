require('./connection')

const Course = require('./models/course.model')

async function createCourses(){
    
    data = [{name:"Geometria",topic:"Angulos",questions:[]},
            {name:"Geometria",topic:"Triangulos",questions:[]},
            {name:"Geometria",topic:"Congruenciencia y semejanza",questions:[]},
            {name:"Algebra",topic:"Ecuaciones lineales",questions:[]},
            {name:"Algebra",topic:"Desigualdades",questions:[]},
            {name:"Algebra",topic:"Funciones",questions:[]},
            {name:"Trigonometria",topic:"Funciones trigonometricas I",questions:[]},
            {name:"Trigonometria",topic:"Funciones trigonometricas II",questions:[]},
            {name:"Trigonometria",topic:"Ecuaciones trigonometricas",questions:[]},
            {name:"Aritmetica",topic:"Fracciones",questions:[]},
            {name:"Aritmetica",topic:"Estadistica",questions:[]},
            {name:"Aritmetica",topic:"Conjuntos",questions:[]}
        ];

    const coursesDoc2 = await Course.insertMany(data);
    return coursesDoc2
}

createCourses()
    .then(coursesDoc2 => console.log(coursesDoc2))
    .catch(err => console.log(err))