import { htmlTemplates, skipWaiting } from './utils/constants/index';
import { textToHtml, updateServiceWorkerToast } from './utils/index';
import './styles';

class Main {
    get rootSelector() { return 'APP-ROOT'; };
    rootElement: Element | Node;
    targetElement: Element | Node;

    entryPoint: string = htmlTemplates.Home;
    htmlTemplate: Node = null;

    constructor() {
        this.rootElement = document.getElementsByTagName(this.rootSelector)[0];

        this.updateSW();
    }

    async updateSW() {
        try {
            var refreshing;
            navigator.serviceWorker.addEventListener('controllerchange', function () {
                if (refreshing) return;
                window.location.reload();
                refreshing = true;
            });

            navigator.serviceWorker.addEventListener('message', msg => console.log('msg', msg));

            navigator.serviceWorker.getRegistration()
                .then(registration => {
                    if (registration.waiting && registration.waiting.state === 'installed') {
                        updateServiceWorkerToast().then(clicked => {
                            if (clicked) {
                                registration.waiting.postMessage({ action: skipWaiting });
                            }
                        });
                    }
                });
        } catch (error) {
            alert(error);
        }
    }

    async init() {
        if (!this.rootElement) {
            return;
        }

        const response: Response = await this.fetchHtmlTemplate();
        this.htmlTemplate = textToHtml(await response.text());
        setTimeout(() => {
            this._setContentAfterLoad();
        }, 2000);
    }

    _setContentAfterLoad() {
        this._removeLogo();
        this.rootElement.appendChild(this.htmlTemplate);
    }

    _removeLogo() {
        document.body.removeChild(document.getElementById('shell'));
    }

    _parseToHtml() {
        const parser = new DOMParser();
    }

    async fetchHtmlTemplate(): Promise<any> {
        return window.fetch(this.entryPoint);
    }
}

window['displayUpdateServiceWorkerToast'] = (worker) => {
    console.log('worker', worker);
};

if (navigator.serviceWorker) {
    navigator.serviceWorker.register('sw.js').then(function (registration) {
        registration.addEventListener('updatefound', function (evt) { window['displayUpdateServiceWorkerToast'].apply(registration.waiting); });

        console.log('reg', registration, !!registration.waiting);

        if (registration.waiting) {
            console.log('waiting', registration.waiting);
            // window['displayUpdateServiceWorkerToast'].apply(registration.waiting);
        }
    });
}

const main = new Main();
main.init();
