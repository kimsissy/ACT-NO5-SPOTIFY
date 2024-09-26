// script.js

let currentTrackIndex = -1;
const tracks = [
    {
        title: "Clean",
        artist: "Taylor Swift",
        src: "song/Taylor Swift - Clean.mp3", // Path to the audio file
        cover: "images/1989.jpg" // Path to the album cover
    },
    {
        title: "Daylight",
        artist: "Taylor Swift",
        src: "song/Taylor Swift - Daylight.mp3", // Path to the audio file
        cover: "images/lover.jpg" // Path to the album cover
    },
    {
        title: "Say Don't Go",
        artist: "Taylor Swift",
        src: "song/Taylor Swift - Say Dont Go.mp3", // Path to the audio file
        cover: "images/fearless.jpg" // Path to the album cover
    },
    {
        title: "These Days",
        artist: "Wallows",
        src: "song/Wallows - These Days.mp3", // Path to the audio file
        cover: "images/wallows.jpg" // Path to the album cover
    },
    {
        title: "18",
        artist: "One Direction",
        src: "song/18.mp3", // Path to the audio file
        cover: "images/1D.jpg" // Path to the album cover
    },
    {
        title: "Cruel Summer",
        artist: "Taylor Swift",
        src: "song/cruel.mp3", // Path to the audio file
        cover: "images/lover.jpg" // Path to the album cover
    },
    {
        title: "Hard Times",
        artist: "Paramore",
        src: "song/hard.mp3", // Path to the audio file
        cover: "images/paramore.jpg" // Path to the album cover
    },
    {
        title: "Wildflower",
        artist: "5sos",
        src: "song/5SOS.mp3", // Path to the audio file
        cover: "images/5sos.jpg" // Path to the album cover
    },
];

const audioPlayer = document.getElementById("audio-player");

function togglePlayPause(index) {
    const playPauseButton = document.getElementById(`play-pause-${index}`);

    // Check if the same track is clicked
    if (currentTrackIndex === index) {
        if (!audioPlayer.paused) {
            audioPlayer.pause();
            playPauseButton.innerHTML = '<i class="fas fa-play-circle fa-lg"></i>';
        } else {
            audioPlayer.play();
            playPauseButton.innerHTML = '<i class="fas fa-pause-circle fa-lg"></i>';
        }
    } else {
        // Pause the currently playing track, if any
        if (currentTrackIndex !== -1) {
            const previousButton = document.getElementById(`play-pause-${currentTrackIndex}`);
            previousButton.innerHTML = '<i class="fas fa-play-circle fa-lg"></i>';
        }

        // Update to the new track
        currentTrackIndex = index;
        audioPlayer.src = tracks[index].src;
        audioPlayer.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause-circle fa-lg"></i>';
    }
}

function changeTrack(direction) {
    let newIndex = currentTrackIndex + direction;

    if (newIndex < 0) {
        newIndex = tracks.length - 1; // Loop to last track
    } else if (newIndex >= tracks.length) {
        newIndex = 0; // Loop to first track
    }

    togglePlayPause(newIndex);
}

audioPlayer.addEventListener('ended', () => {
    changeTrack(1); 
});
