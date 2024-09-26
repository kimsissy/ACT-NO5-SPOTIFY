const db = require('../config/db'); 

exports.searchSongs = async (req, res) => {
    const searchTerm = req.query.q; 

    if (!searchTerm) {
        return res.render('search', { songs: [], searchTerm: '' });
    }

    try {
        const [results] = await db.execute(
            `SELECT * FROM songs WHERE title LIKE ? OR artist LIKE ? OR album LIKE ?`,
            [`%${searchTerm}%`, `%${searchTerm}%`, `%${searchTerm}%`]
        );

        res.render('search', { songs: results, searchTerm });
    } catch (error) {
        console.error('Error fetching songs:', error);
        res.status(500).send('Internal Server Error');
    }
};
