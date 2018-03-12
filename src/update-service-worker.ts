import { updateServiceWorkerToast } from './utils/index';
import { skipWaiting } from './utils/constants/index';

export function updateServiceWorker() {
    function swReady(worker: ServiceWorker) {
        updateServiceWorkerToast().then(clicked => {
            if (clicked) {
                worker.postMessage({ action: skipWaiting });
            }
        });
    }

    function swInstalling(worker) {
        worker.addEventListener('statechange', function () {
            if (worker.state == 'installed') {
                swReady(worker);
            }
        });
    };

    if (navigator.serviceWorker) {
        navigator.serviceWorker.register('sw.js').then(registration => {
            if (!navigator.serviceWorker.controller) {
                return;
            }

            if (registration.waiting) {
                swReady(registration.waiting);
            }

            if (registration.installing) {
                swInstalling(registration.installing);
            }

            registration.addEventListener('updatefound', () => swInstalling(registration.installing));
        });
    }
}