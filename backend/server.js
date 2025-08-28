require('dotenv').config();

const express = require("express");
const app = express()
const cros = require('cors')
const pricingRoutes = require('./routes/pricingRoutes');
const connectDB = require('./src/db');


const startApp = async () => {
    try {

        await connectDB();
        app.use(cros());
        app.use(express.json())
        app.use('/api',pricingRoutes)
        app.listen(3000, () => console.log("Server started on port 3000"));

    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        throw error;
    }
}
startApp()
