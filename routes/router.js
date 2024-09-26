
const express = require('express');
const router = express.Router();
const MusicController = require('../controllers/MusicController');


router.get('/', MusicController.index);


router.get('/search', MusicController.searchSongs);

module.exports = router;
