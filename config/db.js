// // const mysql = require('mysql2');
// // const dotenv = require('dotenv');
// // dotenv.config();

// // const db = mysql.createConnection({
// //     host: process.env.DB_HOST,
// //     user: process.env.DB_USER,
// //     password: process.env.DB_PASSWORD,
// //     database: process.env.DB_NAME
// // });

// // db.connect(err => {
// //     if (err) throw err;
// //     console.log('MySQL connected...');
// // });

// // module.exports = db;

// const mysql = require('mysql2');
// require('dotenv').config();

// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT
// });

// db.connect((err) => {
//   if (err) {
//     console.error('DB connection failed:', err);
//     return;
//   }
//   console.log('Connected to MySQL DB');
// });


// module.exports = db;

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'sql12.freesqldatabase.com',     // use the host from your email
  user: 'sql12781405',                 // your DB username
  password: 'ZcmaSrBKMq',             // your DB password
  database: 'sql12781405',        // your DB name
  port: 3306                             // default MySQL port (confirm if different)
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL DB:', err.message);
    return;
  }
  console.log('✅ Connected to the FreeSQLDatabase MySQL server.');
});

module.exports = connection;


