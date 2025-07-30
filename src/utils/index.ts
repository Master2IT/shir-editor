export const renderElementsToHtml = (data: any) => {
    return data
        .map((item: any) => {
            return item.children.map((child: any) => child.text).join("<br/>");
        })
        .join("<br/>");
};

export const renderHTML = (htmlString: any) => {
    if (!htmlString) return "";

    // Replace specific HTML entities
    let cleanedHtml = htmlString
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">");

    // Remove all HTML tags except <br/> and <a>
    cleanedHtml = cleanedHtml
        .replace(/<(?!\/?br\s*\/?>|\/?\ba\b[^>]*>)[^>]+>/g, "")
        .replace(/\n/g, "<br/>")
        .replace(/^\s+|\s+$/g, ""); // Trim start and end

    return cleanedHtml;
};