/*
 * Time Seeker for Yume
 */
function yumeSeeker(videoContext) {
    const seekContainer = document.createElement('div');
    seekContainer.setAttribute('class', 'seekContainer');

    const followerContainer = document.createElement('div');
    followerContainer.setAttribute('class', 'followContainer');

    /* const bufferContainer = document.createElement('div');
    bufferContainer.setAttribute('class', 'bufferContainer'); */

    const seekSlider = document.createElement('input');
    seekSlider.setAttribute('type', 'range');
    seekSlider.setAttribute('class', 'duration');
    seekSlider.setAttribute('min', 0);
    seekSlider.setAttribute('max', videoContext.duration);

    // seekContainer.appendChild(bufferContainer);
    seekContainer.appendChild(followerContainer);
    seekContainer.appendChild(seekSlider);

    videoContext.addEventListener('timeupdate', () => {
        seekSlider.value = videoContext.currentTime;

        const calculateFollower = videoContext.currentTime / videoContext.duration * 100;
        followerContainer.style.width = `${calculateFollower}%`;
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

Yume.registerControl(yumeSeeker);