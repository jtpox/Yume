/*
 * Time Seeker for Yume
 */
function seekContainer(videoContext) {
    const seekContainer = document.createElement('div');
    seekContainer.setAttribute('class', 'seekContainer');

    const followerContainer = document.createElement('div');
    followerContainer.setAttribute('class', 'followContainer');

    const bufferContainer = document.createElement('div');
    bufferContainer.setAttribute('class', 'bufferContainer');

    /* const bufferContainer = document.createElement('div');
    bufferContainer.setAttribute('class', 'bufferContainer'); */

    const seekSlider = document.createElement('input');
    seekSlider.setAttribute('type', 'range');
    seekSlider.setAttribute('class', 'duration');
    seekSlider.setAttribute('min', 0);
    seekSlider.setAttribute('max', videoContext.duration);

    // seekContainer.appendChild(bufferContainer);
    seekContainer.appendChild(bufferContainer);
    seekContainer.appendChild(followerContainer);
    seekContainer.appendChild(seekSlider);

    videoContext.addEventListener('progress', () => {
        const duration = videoContext.duration;
        if (duration > 0) {
            for (let i = 0; i < videoContext.buffered.length; i++) {
                if (videoContext.buffered.start(videoContext.buffered.length - 1 - i) < videoContext.currentTime) {
                    bufferContainer.style.width = `${(videoContext.buffered.end(videoContext.buffered.length - 1 - i) / duration) * 100}%`;
                    break;
                }
            }
        }
    });

    videoContext.addEventListener('timeupdate', () => {
        const duration = videoContext.duration;
        seekSlider.value = videoContext.currentTime;

        const calculateFollower = videoContext.currentTime / duration * 100;
        followerContainer.style.width = `${calculateFollower}%`;

        if (duration > 0) {
            bufferContainer.style.width = `${(videoContext.currentTime / duration) * 100}%`;
        }
    });

    seekSlider.addEventListener('input', () => {
        videoContext.currentTime = seekSlider.value;
    });

    /* setInterval(() => {
        const calculateBuffered = videoContext.buffered.end(0) / videoContext.duration * 100;
        // console.log(calculateBuffered);
        bufferContainer.style.width = `${calculateBuffered}%`;
        console.log(`${calculateBuffered}%`);
    }, 50); */

    return seekContainer;
}

function calculateFollower(current, duration) {
    return current / duration * 100;
}

export default seekContainer;