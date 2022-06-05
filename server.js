const express = require('express');
const path = require('path');
const { sendFile } = require('express/lib/response');
const app = express();
const connectDB = require('./config/db');

// Connect Database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

// Define users
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// serve static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) =>
        sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    );
}

PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
