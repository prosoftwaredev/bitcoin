const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User.js')

const bitcoinSchema = new Schema({
	key: { type: String, required: true }
	user: { type: Schema.types.ObjectId, ref: 'User'}
}, {timestamps: true});