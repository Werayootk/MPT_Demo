const mongoose = require('mongoose');
const { Schema } = mongoose;

const dataSchema = new Schema({
    id_2d: String,
    model_name: String,
    line_no: String,
    process_no: String,
    lot_no: String,
    job_reject: [String],
    create_date: Date
});

const DataProduct = mongoose.model('data', dataSchema);

module.exports = {
    DataProduct
};