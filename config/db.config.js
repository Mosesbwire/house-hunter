const mongoose = require("mongoose")

const connectDB = async (MONGO_URL) => {
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
