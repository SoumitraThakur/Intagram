const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

// Serve static files (CSS, images, JS)
app.use(express.static(path.join(__dirname)));

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'save.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
