var mongoose = require('mongoose');
var schema = mongoose.Schema;
var userSchema = new schema({
    userEmail: String,
    userPassword: String
}, {
    timestamps: true
});

module.exports = mongoose.model('userLogin', userSchema);