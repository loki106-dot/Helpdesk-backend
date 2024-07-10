const mongoose = require('mongoose');

const QuerySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    orderId: {
        type: String,
        required: true
    },
    queryType: {
        type: String,
        required: true
    },
    queryDescription: {
        type: String,
        required: true
}});

const Query = mongoose.model("Query", QuerySchema);

module.exports = Query;
