const mongoose = require('mongoose')

const giftSchema = new mongoose.Schema(
	{
		Name: {
			type: String,
			required: true,
		},
		Type: {
			type: String,
			required: true,
		},
		Cost: {
			type: Number,
			required: true
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Gift', giftSchema)
