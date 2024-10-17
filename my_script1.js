const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.array('files'), (req, res) => {
    // Handle file upload here
    // You can process uploaded files and send back a response
    res.send('Files uploaded successfully');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
