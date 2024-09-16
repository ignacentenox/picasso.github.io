// Lista de URLs de los videos alojados en tu PC o GitHub
const videos = [
    'https://github.com/ignacentenox/picasso.github.io/blob/main/video%2001.mp4',
    'https://github.com/ignacentenox/picasso.github.io/blob/main/video%2002.mp4',
    'https://github.com/ignacentenox/picasso.github.io/blob/main/video%2003.mp4'
];

let currentVideo = 0;

const videoElement = document.getElementById('playlist');

// Cargar el primer video
videoElement.src = videos[currentVideo];

// Transición continua entre videos sin pantalla negra
videoElement.addEventListener('timeupdate', function () {
    if (videoElement.currentTime > videoElement.duration - 0.5) {
        currentVideo = (currentVideo + 1) % videos.length; // Cambia al siguiente video
        videoElement.src = videos[currentVideo];
        videoElement.play(); // Asegura que el nuevo video comience inmediatamente
    }
});

// Hacer clic en el video activa pantalla completa
videoElement.addEventListener('click', function () {
    if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) { // Firefox
        videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
        videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) { // IE/Edge
        videoElement.msRequestFullscreen();
    }
});

// Abrir pantalla completa automáticamente al cargar la página
window.addEventListener('load', function () {
    if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
    }
});