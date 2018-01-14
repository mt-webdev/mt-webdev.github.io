import { htmlTemplates } from './html-template.const';
import { textToHtml } from './utils/index';
import './styles';

class Main {
    get rootSelector() { return 'APP-ROOT'; };
    rootElement: Element | Node;
    targetElement: Element | Node;

    entryPoint: string = htmlTemplates.Home;
    htmlTemplate: Node = null;

    constructor() {
        this.rootElement = document.getElementsByTagName(this.rootSelector)[0];
    }

    async init() {
        if (!this.rootElement) {
            return;
        }

        const response: Response = await this.fetchHtmlTemplate();
        this.htmlTemplate = textToHtml(await response.text());
        setTimeout(() => {
            this._setContentAfterLoad();
        });
    }

    _setContentAfterLoad() {
        this._removeLogo();
        this.rootElement.appendChild(this.htmlTemplate);
        this._enableScroll();
    }

    _enableScroll() {
        document.body.classList.add('scrollable');
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
