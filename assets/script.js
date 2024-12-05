// script.js

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('video-container').addEventListener('click', function(event) {
        event.preventDefault();
        var videoLink = document.getElementById('video-link').href;
        if (videoLink !== '#') {
            window.open(videoLink, '_blank');
        }
    });
});
