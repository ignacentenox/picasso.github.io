// Lista de videos
const videos = ['video1.mp4', 'video2.mp4', 'video3.mp4'];
let currentVideo = 0;

const videoElement = document.getElementById('playlist');

// Cargar el primer video
videoElement.src = videos[currentVideo];

// Cambiar de video cuando el actual termina
videoElement.addEventListener('ended', function () {
    currentVideo = (currentVideo + 1) % videos.length; // Cambia al siguiente video
    videoElement.src = videos[currentVideo];
    videoElement.play(); // Reproduce el nuevo video
});