// index.js

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Route to handle book submission
app.post('/submit-book', (req, res) => {
    const bookName = req.body.bookName;

    // Send email to notavailable@bookieee.com
    sendEmail(bookName, 'notavailable@bookieee.com');

    res.sendStatus(200);
});

// Function to send email
function sendEmail(bookName, recipientEmail) {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'admintushar@bookieee.com', // Your Gmail address
            pass: 'Dkshri12@' // Your Gmail password
        }
    });

    const mailOptions = {
        from: 'admintushar@bookieee.com',
        to: 'devanshushrivastava@bookieee.com',
        subject: 'Book Unavailability Notification',
        text: `The book "${bookName}" is unavailable.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
