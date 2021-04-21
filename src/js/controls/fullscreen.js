/*
 * Fullscreen for Yume
 */
function fullScreenButton(videoContext, wrapperContext) {
    const fullScreenButton = document.createElement('button');
    fullScreenButton.setAttribute('type', 'button');
    fullScreenButton.setAttribute('class', 'fullscreen');

    fullScreenButton.addEventListener('click', toggleFullscreen(wrapperContext));
    wrapperContext.addEventListener('dblclick', toggleFullscreen(wrapperContext));

    return fullScreenButton;
}

function toggleFullscreen(wrapperContext) {
    return () => {
        if (!document.fullscreenElement) {
            wrapperContext.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }
}

export default fullScreenButton;