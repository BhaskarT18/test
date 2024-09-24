const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Signup Route
app.post('/signup', async (req, res) => {
    const { name, email, password, role = 'user' } = req.body;  // Default role is 'user'
    try {
        const result = await pool.query(
            'INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, email, password, role]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await pool.query(
            'SELECT * FROM users WHERE email = $1 AND password = $2',
            [email, password]
        );
        if (result.rows.length > 0) {
            const user = result.rows[0];
            const message = user.role === 'admin' ? 'Admin login successful' : 'User login successful';
            res.json({ message, user });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
