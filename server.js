const express = require('express');
const app = express();
const connectDB = require('./config/db');

// Connect Database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({ msg: 'hi there' });
});

// Define users
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
