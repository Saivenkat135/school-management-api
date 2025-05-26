const db = require('../config/db');
const getDistance = require('../utils/distance');

exports.addSchool = (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || isNaN(latitude) || isNaN(longitude)) {
        return res.status(400).json({ message: "Invalid input" });
    }

    const sql = 'INSERT INTO school_db (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, address, latitude, longitude], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'School added successfully', schoolId: result.insertId });
    });
};

exports.listSchools = (req, res) => {
    const userLat = parseFloat(req.query.latitude);
    const userLon = parseFloat(req.query.longitude);

    if (isNaN(userLat) || isNaN(userLon)) {
        return res.status(400).json({ message: 'Invalid latitude or longitude' });
    }

    db.query('SELECT * FROM school_db', (err, schools) => {
        if (err) return res.status(500).json({ error: err.message });

        const sorted = schools.map(school => ({
            ...school,
            distance: getDistance(userLat, userLon, school.latitude, school.longitude)
        })).sort((a, b) => a.distance - b.distance);

        res.json(sorted);
    });
};
