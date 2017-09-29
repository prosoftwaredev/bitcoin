const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User.js');

const transactionSchema = new Schema({
	transaction_id: { type: Schema.types.ObjectId, required: true },
	payer: { type: Schema.types.ObjectId, ref: 'User'},
	receiver: [{ type: Schema.types.ObjectId, required: true}]
}, { timestamps: true });