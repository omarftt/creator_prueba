require('./connection')

const Solution = require('./models/solution.model')

async function createSolutions(){
    
    data = [{name:"Solucion 1",content: {texto_sol:"Esta es la solucion del ejercicio" },showed:false},
            {name:"Solucion 2",content: {texto_sol:"Esta es la solucion del ejercicio" },showed:false}
        ];

    const solutiondoc = await Solution.insertMany(data);
    return solutiondoc
}

createSolutions()
    .then(solutiondoc => console.log(solutiondoc))
    .catch(err => console.log(err))