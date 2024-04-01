const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  basecode: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        // Check if the base code is in the format XXXX-XXXX-XXXX-XXXX
        return /^[0-9A-Z]{4}-[0-9A-Z]{4}-[0-9A-Z]{4}-[0-9A-Z]{4}$/.test(v);
      },
      message: props => `${props.value} is not a valid base code! It should be in the format XXXX-XXXX-XXXX-XXXX`
    }
  },
  codes: [{
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        // Check if each code is in the format XXXX-XXXX-XXXX-XXXX-XXX
        return /^[0-9A-Z]{4}-[0-9A-Z]{4}-[0-9A-Z]{4}-[0-9A-Z]{4}-[0-9A-Z]{12}$/.test(v);
      },
      message: props => `${props.value} is not a valid code! It should be in the format XXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX`
    }
  }],
  prize: Boolean,
  found: Boolean
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;