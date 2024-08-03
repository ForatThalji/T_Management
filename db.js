// db.js
const { Pool } = require('pg');

// Database connection configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'T_management',
  password: 'HU@30080',
  port: 5432, // Default PostgreSQL port
});

// Function to test the connection
async function connectTest() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Connection successful:', res.rows[0]);
  } catch (err) {
    console.error('Error connecting to the database:', err.stack);
  }
}

// Export the pool and connectTest function
module.exports = {
  pool,
  connectTest,
};
