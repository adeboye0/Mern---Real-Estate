const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    features: {
        type: Array,
        required: true
    },
    agent_id: {
        type: String,
        required: true
    },
    agent_name: {
        type: String,
        required: true
    },
    likes:{
        type: Array,
    },
    agent_phoneNumber: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    latitude: {
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

const Listing = mongoose.model('listing', ListingSchema);
module.exports = Listing