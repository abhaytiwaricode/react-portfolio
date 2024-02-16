const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");

const app = express(); 

app.use(cors()); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/Database', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (err) => console.error('Failed to connect to Database', err));
db.once('open', () => console.log('Connected to Database'));

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Contact = mongoose.model('Contact', contactSchema);

app.post("/", (req, res) => {
    console.log(req.body); 
    const { name, email, message } = req.body;
    res.send("submitted successfully");

    const newContact = new Contact({
        name,
        email,
        message
    });

    newContact.save((err, contact) => {
        if (err) {
            console.error('Error occurred while saving contact information:', err);
            return res.status(500).send('Error occurred while saving contact information');
        }
        console.log("Contact information saved successfully:", contact);
        return res.status(200).send('Message successfully sent!');
    });
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/`));
