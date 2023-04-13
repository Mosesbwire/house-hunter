const mongoose = require("mongoose")
const config = require("config")

const MONGO_URL = config.get("MONGO_URL")

const connectDB = async () => {
	try {
		await mongoose.connect(MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		console.log("mongo db connected...")
	} catch (err) {
		console.log(err)
		process.exit(1)
	}
}

module.exports = connectDB
