const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://john9223:john9223@cluster0.u4sxe.mongodb.net/foodelivery';

const mongoDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(mongoURI);
        console.log("✅ MongoDB Connected Successfully!");

        // Fetch collections concurrently
        const db = mongoose.connection.db;
        const foodCollection = db.collection("food_items");
        const categoryCollection = db.collection("food_category");

        // Fetch data using Promise.all() for better efficiency
        const [foodItems, foodCategories] = await Promise.all([
            foodCollection.find({}).toArray(),
            categoryCollection.find({}).toArray()
        ]);

        // Store data in global variables
        global.food_items = foodItems;
        global.food_category = foodCategories;

        console.log("📌 Fetched Food Items & Categories:", foodItems.length, foodCategories.length);

    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error);
        process.exit(1);
    }
};

module.exports = mongoDB;
