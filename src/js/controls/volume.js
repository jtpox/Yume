/*
 * Volume control for Yume.
 */
function volumeContainer(videoContext) {
    const volumeContainer = document.createElement('div');
    volumeContainer.setAttribute('class', 'volumeContainer');

    const followerContainer = document.createElement('span');
    followerContainer.setAttribute('class', 'volumeFollowContainer');

    const volumeSlider = document.createElement('input');
    volumeSlider.setAttribute('type', 'range');
    volumeSlider.setAttribute('class', 'volume');
    volumeSlider.setAttribute('min', 0);
    volumeSlider.setAttribute('max', 1);
    volumeSlider.setAttribute('step', 0.01);
    volumeSlider.setAttribute('value', videoContext.volume);

    volumeContainer.appendChild(followerContainer);
    volumeContainer.appendChild(volumeSlider);

    // let originalVolume = videoContext.volume;

    volumeSlider.addEventListener('input', () => {
        videoContext.volume = volumeSlider.value;
    });

    /* volumeContainer.addEventListener('click', () => {
        console.log('Test');
        
        if (videoContext.volume > 0) {
            originalVolume = videoContext.volume;
            videoContext.volume = 0;
            volumeSlider.value = 0;
        } else {
            videoContext.volume = originalVolume;
            volumeSlider.value = originalVolume;
        }
    }); */

    return volumeContainer;
}

export default volumeContainer;