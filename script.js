// Lista de videos
const videos = ['video1.mp4', 'video2.mp4', 'video3.mp4'];
let currentVideo = 0;

const videoElement = document.getElementById('playlist');

// Función para activar el modo de pantalla completa
function openFullscreen() {
    if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) { // Firefox
        videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
        videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) { // IE/Edge
        videoElement.msRequestFullscreen();
    }
}

// Cargar el primer video
videoElement.src = videos[currentVideo];

// Cambiar de video cuando el actual termina
videoElement.addEventListener('ended', function () {
    currentVideo = (currentVideo + 1) % videos.length; // Cambia al siguiente video
    videoElement.src = videos[currentVideo];
    videoElement.play(); // Reproduce el nuevo video
});

// Al hacer clic en el video, activar pantalla completa
videoElement.addEventListener('click', openFullscreen);

// Abrir pantalla completa automáticamente al cargar la página
window.addEventListener('load', openFullscreen);