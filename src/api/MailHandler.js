const nodemailer = require("nodemailer");

const { EmailClient } = require("@azure/communication-email");
const connectionString = process.env.MAIL_CONNECTION_STRING;
const client = new EmailClient(connectionString);

const transporter = nodemailer.createTransport({
	host: process.env.MAIL_ENDPOINT,
	secure: false,
	auth: {
		user: process.env.SMTP_USERNAME,
		pass: process.env.SMTP_PASSWORD,
	},
	tls: {
		rejectUnauthorized: false,
	},
});

module.exports = async function sendMail(message, subject, toEmail) {
	console.log("Sending to: " + toEmail);
	const mail = {
		senderAddress: `insightink@${process.env.MAIL_ENDPOINT}`,
		content: {
			subject: subject,
			plainText: message,
		},
		recipients: {
			to: [
				{
					address: toEmail,
				},
			],
		},
	};
	const poller = await client.beginSend(mail);
	return;
	// return await transporter.sendMail(mailOptions);
};
