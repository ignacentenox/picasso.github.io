// Lista de videos
const videos = ['video1.mp4', 'video2.mp4', 'video3.mp4'];
let currentVideo = 0;

const videoElement = document.getElementById('playlist');

// Cargar el primer video
videoElement.src = videos[currentVideo];

// Evitar pantalla en negro o pausa entre videos
videoElement.addEventListener('timeupdate', function () {
    // Verifica si faltan menos de 0.5 segundos para que termine el video actual
    if (videoElement.currentTime > videoElement.duration - 0.5) {
        // Actualiza el video antes de que termine el actual
        currentVideo = (currentVideo + 1) % videos.length;
        videoElement.src = videos[currentVideo];
        videoElement.play(); // Asegura que el nuevo video comience inmediatamente
    }
});

// Al hacer clic en el video, activar pantalla completa
videoElement.addEventListener('click', function () {
    if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) { // Firefox
        videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
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