const mongoose = require('mongoose')

const pricingCardSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    billing: {
        type: String,
        require: true,
    },
    save: {
        type: String,
        require: false,
    },
    isMostPopular: {
        type: Boolean,
        require: false,
    },
    comingSoon: {
        type: String,
        require: false,
    },
    disclaimer: [{
        type: String,
        require: false,
    }],

    prices: {
        type:Number,
        require:true
    },
    features: [{
        type: String,
    }
    ],
})

module.exports= mongoose.model('PricingCard', pricingCardSchema);