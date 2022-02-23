require('./connection')

const Question = require('./models/questions.model')

async function createQuestions(){
    
    data = [{name:"Armando cubos ",course:"621534f1d4a2a1051bc2f0f3",difficult:"Easy",
                content:{text:"Este es el enunciado del ejercicio 1"},
                solution:"62153b2dfed1d2d47f7cdad7",
                video:"Link video 1" ,option:"62153d1e00f8e119f9798cec", status:false},
            {name:"Armando cubos 2 ",course:"621534f1d4a2a1051bc2f0f3",difficult:"Easy",
                content:{text:"Este es el enunciado del ejercicio 2"},
                solution:"62153b2dfed1d2d47f7cdad7", 
                video:"Link video 2" ,option:"62153d1e00f8e119f9798cec", status:false},
            
            {name:"Polinomio dorado ",course:"621534f1d4a2a1051bc2f0f3",difficult:"Intermediate",
                content:{text:"Este es el enunciado del ejercicio 3"},
                solution:"62153b2dfed1d2d47f7cdad7", 
                video:"Link video 3" ,option:"62153d1e00f8e119f9798cec", status:false},
            {name:"Polinomio unico ",course:"621534f1d4a2a1051bc2f0f3",difficult:"Intermediate",
                content:{text:"Este es el enunciado del ejercicio 4"},
                solution:"62153b2dfed1d2d47f7cdad7", 
                video:"Link video 4" ,option:"62153d1e00f8e119f9798cec", status:false},
            {name:"Encuentra la x ",course:"621534f1d4a2a1051bc2f0f3",difficult:"Intermediate",
                content:{text:"Este es el enunciado del ejercicio 5"},
                solution:"62153b2dfed1d2d47f7cdad7", 
                video:"Link video 5" ,option:"62153d1e00f8e119f9798cec", status:false},
            {name:"Funciones inversas ",course:"621534f1d4a2a1051bc2f0f3",difficult:"Advanced",
                content:{text:"Este es el enunciado del ejercicio 6"},
                solution:"62153b2dfed1d2d47f7cdad7", 
                video:"Link video 6" ,option:"62153d1e00f8e119f9798cec", status:false},
            {name:"Funciones magicas ",course:"621534f1d4a2a1051bc2f0f3",difficult:"Advanced",
                content:{text:"Este es el enunciado del ejercicio 7"},
                solution:"62153b2dfed1d2d47f7cdad7", 
                video:"Link video 7" ,option:"62153d1e00f8e119f9798cec", status:false},
        ];

    const questiondoc = await Question.insertMany(data);
    return questiondoc
}

createQuestions()
    .then(questiondoc => console.log(questiondoc))
    .catch(err => console.log(err))