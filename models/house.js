var mongoose = require('mongoose')
const House = mongoose.model('House', { 
    name: String,
    color: String,
    head_boy: String,
    head_girl: String,
    sport_head_boy: String,
    sport_head_girl: String
});
module.exports = House