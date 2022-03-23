const mongoose = require('mongoose');
const ProductsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30

    },
    description: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 2000
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    images: {
        type: Array,
        required: false,
    }
})

module.exports = mongoose.model('Products', ProductsSchema)