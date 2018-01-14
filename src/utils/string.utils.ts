
export function textToHtml(text: string): Node {
    const parser = new DOMParser();
    const htmlDoc =  parser.parseFromString(text, 'text/html');
    return htmlDoc.body.childNodes[0];
}
