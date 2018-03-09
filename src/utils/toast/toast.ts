import './toast.style.scss';

const YES_FA_ICON = 'check';
const NO_FA_ICON = 'times';

export function updateServiceWorkerToast(): Promise<any> {
    return new Promise((res, rej) => {
        const toast = document.createElement('div');

        toast.setAttribute('class', 'toast-message');
        toast.setAttribute('id', 'sw--toast-message');

        toast.appendChild(getTextElement());

        let yesCallback = () => {
            toast.remove();
            res(true);
        };

        let noCallback = () => {
            toast.remove();
            res(false);
        };

        const yesButton = getYesButton(yesCallback);
        toast.appendChild(yesButton);

        const noButton = getNoButton(noCallback);
        toast.appendChild(noButton);

        document.getElementsByTagName('app-root')[0].appendChild(toast);
    });
}

function getTextElement() {
    const textEl = document.createElement('span');
    textEl.innerText = 'Es gibt Neuerungen, bitte neu laden!';

    return textEl;
}

function getYesButton(clickCallback) {
    return createButton(YES_FA_ICON, clickCallback);
}

function getNoButton(clickCallback) {
    return createButton(NO_FA_ICON, clickCallback);
}

function createButton(faIcon, clickCallback) {
    const buttonEl = document.createElement('div');
    buttonEl.setAttribute('class', `fa fa-${faIcon}`);
    buttonEl.addEventListener('click', clickCallback);

    return buttonEl;
}