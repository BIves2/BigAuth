const db = require('../config/database');
const User = {
    // Function used to get user from database with email
    getByEmail : (email, callback) => {
        db.query('SELECT * FROM users WHERE email = ?', [email], callback);
    },

    // Function used to create an user with his attributes
    createUserWithPassword : (name, email, password, callback) => {
        db.query('INSERT INTO users(name, password, email) VALUES (?, ?, ?)', [name, password, email], callback);
    }    
}

module.exports = User;