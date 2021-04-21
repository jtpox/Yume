function timeStamp(videoContext) {
    const timeContainer = document.createElement('div');
    timeContainer.setAttribute('class', 'timeContainer');
    timeContainer.innerHTML = `${convertTime(0)} / ${convertTime(videoContext.duration)} `;

    videoContext.addEventListener('timeupdate', () => {
        // timeContainer.innerHTML = `${convertedCurrentTime} / ${convertedDuration}`;
        timeContainer.innerHTML = `${convertTime(videoContext.currentTime)} / ${convertTime(videoContext.duration)} `;
    });

    return timeContainer;
}

function convertTime(sec) {
    const parsedSeconds = parseInt(sec, 10);
    const hours = Math.floor(parsedSeconds / 3600);
    const minutes = Math.floor(parsedSeconds / 60) % 60;
    const seconds = parsedSeconds % 60;

    return [hours,minutes,seconds]
        .map(v => v < 10 ? '0' + v : v)
        .filter((v,i) => v !== '00' || i > 0)
        .join(':')
}

export default timeStamp;