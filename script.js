// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [ {songName:"Mortals (feat. Laura Brehm)", filePath:"./songs/1.mp3", coverPath:"./covers/1.jpg"}, {songName:"Cielo – Huma-Huma", filePath:"./songs/2.mp3", coverPath:"./covers/2.jpg"}, {songName:"Deaf Kev Invincible", filePath:"./songs/3.mp3", coverPath:"./covers/3.jpg"}, {songName:"Different Heaven & EH!DE - My Heart", filePath:"./songs/4.mp3", coverPath:"./covers/4.jpg"}, {songName:"5.mp3", filePath:"./songs/5.mp3", coverPath:"./covers/5.jpg"}, {songName:"6.mp3", filePath:"./songs/6.mp3", coverPath:"./covers/6.jpg"}, {songName:"7.mp3", filePath:"./songs/7.mp3", coverPath:"./covers/7.jpg"}, {songName:"8.mp3", filePath:"./songs/8.mp3", coverPath:"./covers/8.jpg"}, {songName:"9.mp3", filePath:"./songs/9.mp3", coverPath:"./covers/9.jpg"}, {songName:"10.mp3", filePath:"./songs/10.mp3", coverPath:"./covers/10.jpg"}, ]

// Function to play the next song
const playNextSong = () => {
    if (songIndex < songs.length - 1) {
        songIndex++;
        playSong();
    } else {
        songIndex = 0; // Loop back to the first song
        playSong();
    }
};

// Function to play a specific song
const playSong = () => {
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
};

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        playSong();
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

// Listen to the 'ended' event for playing the next song
audioElement.addEventListener('ended', playNextSong);

// ... (your existing event listeners)

// Function to initialize song items
const initializeSongItems = () => {
    songItems.forEach((element, i) => {
        element.getElementsByTagName("img")[0].src = songs[i].coverPath;
        element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
        element.getElementsByClassName("songItemPlay")[0].addEventListener('click', (e) => {
            makeAllPlays();
            songIndex = i;
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            playSong();
        });
    });
};

// Function to make all plays inactive
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

// Initialize song items
initializeSongItems();
