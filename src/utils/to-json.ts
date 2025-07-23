// Convert HTML content to JSON structure
export const toJson = (html: string): any => {
    try {
        // Basic implementation - you can enhance this based on your needs
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const body = doc.body;

        const convertNode = (node: Node): any => {
            if (node.nodeType === Node.TEXT_NODE) {
                return { type: 'text', content: node.textContent };
            }

            if (node.nodeType === Node.ELEMENT_NODE) {
                const element = node as Element;
                const children: any[] = [];

                for (let i = 0; i < node.childNodes.length; i++) {
                    children.push(convertNode(node.childNodes[i]));
                }

                return {
                    type: element.tagName.toLowerCase(),
                    attributes: Array.from(element.attributes).reduce((acc, attr) => {
                        acc[attr.name] = attr.value;
                        return acc;
                    }, {} as Record<string, string>),
                    children
                };
            }

            return null;
        };

        const children: any[] = [];
        for (let i = 0; i < body.childNodes.length; i++) {
            const converted = convertNode(body.childNodes[i]);
            if (converted) children.push(converted);
        }

        return { type: 'document', children };
    } catch (error) {
        console.error('Error converting HTML to JSON:', error);
        return { type: 'document', children: [{ type: 'text', content: html }] };
    }
};
