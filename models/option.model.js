const { Schema, model } = require('mongoose');

const optionSchema = new Schema({
  body: {
    type: Object,
    required: true,
  },
  showed: {
    type: Boolean,
    required: true,
  }
});

module.exports = model('Option', optionSchema)
