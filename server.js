const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname)));

// Route to serve HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'save.html')); // change to your actual file name
});

// Route to save form data
app.post('/save', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send('Email and password required');
    }

    const data = `${email},${password}\n`;

    fs.appendFile('data.txt', data, (err) => {
        if (err) {
            return res.status(500).send('Error saving data');
        }
        res.send('Data saved successfully');
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
