const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                // Check if the code is in the format XXXX-XXXX-XXXX-XXXX
                return /^[0-9A-Z]{4}-[0-9A-Z]{4}-[0-9A-Z]{4}-[0-9A-Z]{4}$/.test(v);
            },
            message: props => `${props.value} is not a valid code! It should be in the format XXXX-XXXX-XXXX-XXXX`
        }
    },
    prize: Boolean,
    found: Boolean
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;