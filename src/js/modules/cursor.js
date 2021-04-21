/*
 * Hide Cursor and Control for Yume
 */
function cursorAndControl(videoContext, yumeContext, controlContainer) {
    let timer = null;
    let visible = true;
    yumeContext.addEventListener('mousemove', () => {
        if (timer) {
            window.clearTimeout(timer);
        }

        if (!visible) {
            toggleCursorAndControl(true, yumeContext, controlContainer);
            visible = true;
        }

        timer = window.setTimeout(() => {
            visible = false;
            toggleCursorAndControl(false, yumeContext, controlContainer);
        }, 2000);
    });
}

function toggleCursorAndControl(type, yumeContext, controlContainer) {
    if (!type) {
        yumeContext.style.cursor = 'none';
        controlContainer.style.opacity = '0';
    } else {
        yumeContext.style.cursor = 'default';
        controlContainer.style.opacity = '1';
    }
}

export default cursorAndControl;