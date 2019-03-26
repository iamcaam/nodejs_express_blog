var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: {
        type: String, 
        require: true, 
    },
    author: {
        type: Schema.Types.ObjectId, 
        ref: 'Author',
        require: true
    },    
    summary: {
        type: String,
        require: true
    },
    isbn: {
        type: String,
        require: true
    },    
    gener: [{
        type: Schema.Types.ObjectId,
        ref: 'Gener'
    }]
});

// Virtual for book's URL
BookSchema
    .virtual('url')
    .get(function () {
        return '/catalog/book/' + this._id;
    });    

//Export model
module.exports = mongoose.model('Book', BookSchema);    