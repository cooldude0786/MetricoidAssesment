const PricingCard = require('../models/pricingCard')

exports.getPrincing = async (req, res) => {
    console.log("checkinh it")
    try {
        const prcingData = await PricingCard.find()
        if (prcingData.length === 0) {
            const sampleData = await PricingCard.create({
                title: "Most Popular",
                prices: 5,
                billing: '/mo',
                save: "Billied Annually",
                isMostPopular: true,
                comingSoon: "coming soon in Dec 2025",
                features: [
                    'include Feature 1',
                    'include Feature 2',
                    'include Feature 3',
                ],
                disclaimer: ['you\'ll be charged $48 + Tax', ' 14-days MoneyBack Guarantee.']
            })
            // await sampleData.save(function (err, result) {
            //     if (err) {
            //         console.log(err);
            //     }
            //     else {
            //         console.log(result)
            //     }
            // });

            return res.status(201).send(sampleData)
        }
        res.status(201).json(prcingData[0])

    } catch (error) {
        console.log("error", error)
        res.status(500).send("Internal Server Error");
    }
}