var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GenerSchema = new Schema({
    name: {
        type: String, 
        require: true, 
        max: 100,
        min: 3
    }   
});

// Virtual for gener's URL
GenerSchema
    .virtual('url')
    .get(function () {
        return '/catalog/gener/' + this._id;
    });    

//Export model
module.exports = mongoose.model('Gener', GenerSchema);    