console.log("Welcome to Spotify");
//initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/DJ Snake - Let Me Love You ft. Justin Bieber.mp3');
let masterPlay = document.getElementById('masterPlay');
let MyProgressBar = document.getElementById('MyProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Let Me Love You", filePath: "songs/DJ Snake - Let Me Love You ft. Justin Bieber.mp3", coverPath: "images/DJSnakeLetMeLoveYou.jpg" },
    { songName: "Aurora", filePath: "songs/AURORA - Runaway.mp3", coverPath: "images/RunAway.jpg" },
    { songName: "Past Lives", filePath: "songs/BØRNS - Past Lives (Lyrics).mp3", coverPath: "images/PastLives.jpg" },
    { songName: "Love Grows", filePath: "songs/Edison Lighthouse - Love Grows (Where My Rosemary Goes) (Official Video).mp3", coverPath: "images/LoveGrows.jpg" },
    { songName: "Mary On A Cross", filePath: "songs/Ghost - Mary On A Cross (Lyrics).mp3", coverPath: "images/Ghost.jpg" },
    { songName: "Night Changes", filePath: "songs/One Direction - Night Changes (Lyrics).mp3", coverPath: "images/NightChanges.jpg" },
    { songName: "Love Story", filePath: "songs/Taylor Swift - Love Story (Lyrics).mp3", coverPath: "images/Taylor_Swift_-_Love_Story.png" },
    { songName: "Snap", filePath: "songs/Snap. Rose Linn.mp3", coverPath: "images/Snap.jpg" }
]

songItem.forEach(element => {
    // console.log(element.getElementsByTagName('img')[0].src)
    // console.log(element.getElementsByClassName('SongName')[0].innerText)
});

// audioElement.play();

//handle play/pause click
console.log(masterPlay);

masterPlay.addEventListener('click', () => {
    // console.log("Master Play clicked")
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//listen to events
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log('timeupdate', progress, audioElement.src);
    MyProgressBar.value = progress;
})

MyProgressBar.addEventListener('change', () => {
    audioElement.currentTime = MyProgressBar.value * audioElement.duration / 100;
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-play-circle');
        element.classList.add('fa-pause-circle');
    })
}

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//     element.addEventListener('click', (e) => {
//         makeAllPlays();
//         index = parseInt(e.target.id);
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//         audioElement.src = 'songs/${index}.mp3';
//         audioElement.currentTime = 0;
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//     })
// })


playBtns = Array.from(document.getElementsByClassName("songItemPlay"))

console.log(playBtns)

playBtns.forEach(element => {
    element.addEventListener("click", () => {
        setMasterPlay(element.id);
    })
});

function setMasterPlay(songId) {
    songInfo = document.getElementById("masterPlayTitle");
    songInfo.innerText = songs[songId].songName
    audioElement.src = songs[songId].filePath
    console.log(songId, "Playing = ", songs[songId].songName)
    audioElement.play()
}
