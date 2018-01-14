import { htmlTemplates } from './html-template.const';
import { textToHtml } from './utils/index';

import './styles/main.scss';

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
        const response: Response = await this.fetchHtmlTemplate();
        this.htmlTemplate = textToHtml(await response.text());
        this.rootElement.appendChild(this.htmlTemplate);
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
window['main'] = main;
