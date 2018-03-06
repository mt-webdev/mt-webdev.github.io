
export function updateServiceWorkerToast() {
    const toast = document.createElement('div');
    toast.setAttribute('class', 'toast-message');
    toast.setAttribute('id', 'sw--toast-message');

    toast.innerHTML = `
        <h2>Es gibt Neuerungen, bitte neu laden!</h2>
        <button click="console.log('YES');">JA</button>
    `;

    document.getElementsByTagName('app-root')[0].appendChild(toast);
}
