const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    category_name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
    {
        timestamp: true,
    });

const Category = mongoose.model('category', CategorySchema);
module.exports = Category