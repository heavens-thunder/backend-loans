var mongoose = require('mongoose')
const Student = mongoose.model('Student', { 
    name: String,
    age: Number,
    country: String,
    bio: String
});
module.exports = Student