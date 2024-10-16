const app = require("./app");
require("dotenv").config();
const mongoose = require("mongoose");
// const winston = require("winston");

const path = require("path");
//
// const logger = winston.createLogger({
// 	transports: [
// 		new LogstashTransport({
// 			port: 28777,
// 			node_name: "my node name",
// 			host: "127.0.0.1",
// 		}),
// 	],
// });

// Example log entries
// logger.info("App is starting...");
// logger.error("An error occurred");

// module.exports = logger;

// const uri = `mongodb+srv://arghadeep:${process.env.DB_PWD}@cluster0.nm8klgn.mongodb.net/?retryWrites=true&w=majority`;
// const uri = `mongodb://root:Chicken399@blogging-db-cluster.cluster-cl624q08ms6x.ap-south-1.docdb.amazonaws.com:27017/?tls=true&tlsCAFile=global-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false`;
const uri =
	process.env.DATABASE_URI || "mongodb://localhost:27017/insightink_db";

const port = process.env.PORT || 3000;
const startServer = async () => {
	try {
		console.log("Connecting to db");
		await mongoose.connect(uri);
		console.log("Connected to db");
	} catch (e) {
		console.error(e);
		process.exit(1);
	}
};

startServer();

app.listen(port, () => {
	console.log("server running");
});
