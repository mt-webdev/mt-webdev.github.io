
export function textToHtml(text: string): Node {
    const parser = new DOMParser();
    return parser.parseFromString(text, 'text/xml').firstChild;
}
