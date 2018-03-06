import './toast.style.scss';

export function updateServiceWorkerToast(): Promise<any> {
    return new Promise((res, rej) => {
        const toast = document.createElement('div');

        toast.setAttribute('class', 'toast-message');
        toast.setAttribute('id', 'sw--toast-message');

        toast.appendChild(getTextElement());

        let clickCallback = () => res(true);
        const buttonEl = getButtonElement(clickCallback);
        toast.appendChild(buttonEl);

        document.getElementsByTagName('app-root')[0].appendChild(toast);
    });
}

function getTextElement() {
    const textEl = document.createElement('h2');
    textEl.innerText = 'Es gibt Neuerungen, bitte neu laden!';

    return textEl;
}

function getButtonElement(clickCallback) {
    const buttonEl = document.createElement('button');
    buttonEl.innerHTML = 'JA';
    buttonEl.addEventListener('click', clickCallback);

    return buttonEl;
}