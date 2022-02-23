const { Schema, model } = require('mongoose');

const courseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    topic: {
        type: String,
        required: true,
    },
    questions: {
        type: [{ type: Schema.Types.ObjectId, ref: "Question" }],
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
  
});

module.exports = model('Course', courseSchema)
