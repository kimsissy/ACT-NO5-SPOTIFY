const MusicController = {
    index: (req, res) => {
        res.render('index'); 
    },

    searchSongs: (req, res) => {
        const searchTerm = req.query.q || ''; 
        const songs = [
            { title: "Clean", artist: "Taylor Swift", album: "Fearless" },
            { title: "Daylight", artist: "Taylor Swift", album: "1989" },
            { title: "Say Don't Go", artist: "Taylor Swift", album: "1989" },
            { title: "These Days", artist: "Wallows", album: "Wallows" },
        ];

  
        const filteredSongs = songs.filter(song =>
            song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
            song.album.toLowerCase().includes(searchTerm.toLowerCase())
        );


        res.render('search', { searchTerm, songs: filteredSongs });
    }
};

module.exports = MusicController;