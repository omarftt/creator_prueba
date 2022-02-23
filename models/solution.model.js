const { Schema, model } = require('mongoose');

const solutionSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    content: {
        type: Object,
        required: true,
    },
    showed: {
        type: Boolean,
        required: true,
    },
  
});


module.exports = model('Solution', solutionSchema)