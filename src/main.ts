import { htmlTemplates } from './html-template.const';
import { textToHtml } from './utils/index';
import './styles';
import { updateServiceWorkerToast } from './utils';

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
            const registration = await navigator.serviceWorker.getRegistration();
            if (await registration.waiting && await registration.waiting.state === 'installed') {
                const clickedYes = updateServiceWorkerToast();
                if (await clickedYes) {
                    await registration.update().then(() => window.location.reload())
                        .catch(err => console.log('err', err));
                }
            }
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
        return window['fetch'].call(window, this.entryPoint);
    }
}

const main = new Main();
main.init();
