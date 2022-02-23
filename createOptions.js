require('./connection')

const Option = require('./models/option.model')

async function createOptions(){
    
    data = [{body:{option1:"Option 1 del ejercicio",option2:"Option 2 del ejercicio"},showed:false},
            {body:{option1:"Option 1 de otro ejercicio",option2:"Option 2 de otro ejercico"},showed:false}
        ];

    const optiondoc = await Option.insertMany(data);
    return optiondoc
}

createOptions()
    .then(optiondoc => console.log(optiondoc))
    .catch(err => console.log(err))