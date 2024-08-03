// app.js
const express = require('express');
const { pool, connectTest } = require('./db');

const app = express();
app.use(express.json());

// Test connection
connectTest();

// Define routes and database interactions
app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send('Error querying database');
  }
});

const PORT = process.env.PORT || 8004;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
