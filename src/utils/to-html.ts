export const toHtml = (data: any) => {
    return data
        .map((item: any) => {
            return item.children.map((child: any) => child.text).join("");
        })
        .join("<br/>");
};