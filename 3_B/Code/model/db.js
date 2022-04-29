const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;