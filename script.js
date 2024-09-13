// Lista de IDs de videos de YouTube
const videoIDs = ['6EczRvbmsvw', 'IQsc0ezuto', 'HkXmmi3r7Oo']; // Reemplaza con los IDs de los videos

let currentVideo = 0;
let player;

// Función que carga la API de YouTube y configura el reproductor
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: videoIDs[currentVideo],
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'rel': 0,
            'showinfo': 0,
            'modestbranding': 1,
            'loop': 0
        },
        events: {
            'onStateChange': onPlayerStateChange,
            'onReady': onPlayerReady
        }
    });
}

// Función para manejar cuando el reproductor esté listo
function onPlayerReady(event) {
    event.target.playVideo();
}

// Función para manejar el cambio de estado del video
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        currentVideo = (currentVideo + 1) % videoIDs.length; // Pasar al siguiente video
        player.loadVideoById(videoIDs[currentVideo]); // Cargar el siguiente video
    }
}

// Función para forzar la reproducción en pantalla completa
document.getElementById('player').addEventListener('click', function () {
    if (player.getIframe().requestFullscreen) {
        player.getIframe().requestFullscreen();
    } else if (player.getIframe().mozRequestFullScreen) { // Firefox
        player.getIframe().mozRequestFullScreen();
    } else if (player.getIframe().webkitRequestFullscreen) { // Chrome, Safari and Opera
        player.getIframe().webkitRequestFullscreen();
    } else if (player.getIframe().msRequestFullscreen) { // IE/Edge
        player.getIframe().msRequestFullscreen();
    }
});