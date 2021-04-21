/*
 * Play/Pause button for Yume.
 */
function playButton(videoContext, wrapperContext) {
    const playButton = document.createElement('button');
    playButton.setAttribute('type', 'button');
    playButton.setAttribute('class', 'play');

    if (videoContext.getAttribute('data-autoplay') == 'true') playButton.style.display = 'none';
    if (!videoContext.paused) playButton.style.display = 'block';

    playButton.addEventListener('click', () => {
        videoContext.play();
        playButton.style.display = 'none';

        document.querySelector('#yume .pause').style.display = 'inline-block';
    });

    videoContext.addEventListener('pause', () => {
        document.querySelector('#yume .pause').style.display = 'none';
        playButton.style.display = 'inline-block';
    });

    /*
     * Keypress for play and pause.
     */
    document.addEventListener('keydown', (e) => {
        if (e.key == ' ') {
            if (videoContext.paused) {
                videoContext.play()
            } else {
                videoContext.pause();
            }
        }
    });

    return playButton;
}

function pauseButton(videoContext) {
    const pauseButton = document.createElement('button');
    pauseButton.setAttribute('type', 'button');
    pauseButton.setAttribute('class', 'pause');

    if (videoContext.getAttribute('data-autoplay') == 'false') pauseButton.style.display = 'none';
    if (videoContext.paused) pauseButton.style.display = 'none';

    pauseButton.addEventListener('click', () => {
        videoContext.pause();
        pauseButton.style.display = 'none';

        document.querySelector('#yume .play').style.display = 'inline-block';
    });

    videoContext.addEventListener('play', () => {
        document.querySelector('#yume .play').style.display = 'none';
        pauseButton.style.display = 'inline-block';
    });

    return pauseButton;
}

export { playButton, pauseButton };