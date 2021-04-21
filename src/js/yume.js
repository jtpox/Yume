import { playButton, pauseButton } from './controls/play';
import timeStamp from './controls/time';
import seekContainer from './controls/seek';
import volumeContainer from './controls/volume';
import fullscreenButton from './controls/fullscreen';

import cursorAndControl from './modules/cursor';

class YumePlayer {
    constructor() {
        this.videoContainer = document.querySelector('[data-type="yume"]');
        // this.videoContainer.setAttribute('width', '100%');
        this.controlContainer = null;

        this.controls = [];
        this.modules = [];
        this.addContainer();
    }

    addContainer() {
        const newContainer = document.createElement('div');
        newContainer.setAttribute('id', 'yume');

        const contentContainer = document.createElement('div');
        contentContainer.setAttribute('class', 'content');

        const clickContainer = document.createElement('div');
        clickContainer.setAttribute('class', 'click');

        clickContainer.addEventListener('click', () => (this.videoContainer.paused) ? this.videoContainer.play():this.videoContainer.pause());

        this.controlContainer = document.createElement('div');
        this.controlContainer.setAttribute('class', 'controls');

        this.videoContainer.addEventListener('loadedmetadata', () => {
            this.renderControls(newContainer);
            this.renderModules(newContainer, this.controlContainer);
        });

        this.videoContainer.parentNode.insertBefore(newContainer, this.videoContainer);
        newContainer.appendChild(this.videoContainer);
        newContainer.appendChild(contentContainer);
        
        contentContainer.appendChild(clickContainer);
        contentContainer.appendChild(this.controlContainer);
    }

    renderControls(yumeContainer) {
        for (let i = 0; i < this.controls.length; i++) {
            const control = this.controls[i](this.videoContainer, yumeContainer);
            this.controlContainer.appendChild(control);
        }
    }

    renderModules(yumeContainer, controlContainer) {
        for (let i = 0; i < this.modules.length; i++) {
            this.modules[i](this.videoContainer, yumeContainer, controlContainer);
        }
    }

    registerControl(control) {
        if (Array.isArray(control)) {
            control.forEach((con) => {
                this.controls.push(con);
            })
        } else {
            this.controls.push(control);
        }
    }

    registerModule(module) {
        if (Array.isArray(module)) {
            control.forEach((mod) => {
                this.modules.push(mod);
            })
        } else {
            this.modules.push(module);
        }
    }
}

Yume = new YumePlayer();

Yume.registerControl([
    playButton,
    pauseButton,
    timeStamp,
    seekContainer,
    volumeContainer,
    fullscreenButton,
]);
Yume.registerModule(cursorAndControl);

export default Yume;