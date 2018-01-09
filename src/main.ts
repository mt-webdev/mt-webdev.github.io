import { htmlTemplates } from './html-template.const';
import { textToHtml } from './utils/index';

class Main {
    get rootSelector() { return 'APP-ROOT'; };
    rootElement: Element | Node;
    targetElement: Element | Node;

    entryPoint: string = htmlTemplates.Home;
    htmlTemplate: Node = null;

    constructor() {
        for (const childs of document.body.childNodes.entries()) {
            if (childs[1].nodeName === 'APP-ROOT') {
                this.rootElement = childs[1];
            }
        }
    }

    async init() {
        const response: Response = await this.fetchHtmlTemplate();
        this.htmlTemplate = textToHtml(await response.text());
        document.body.appendChild(this.htmlTemplate);
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
