import { cn } from "@/lib/utils";
import Toolbar from "./toolbar";
import { toHtml } from "@/utils/to-html";

const Editor = ({ value, onChange, className }: { value: string, onChange: (value: string) => void, className?: string }) => {
    return (
        <div dir="rtl" className={cn("border rounded-md h-full flex flex-col w-full", className)}>
            <Toolbar />
            <div
                ref={(el) => {
                    if (el && el.innerHTML !== value && typeof value === 'string') {
                        try {
                            el.innerHTML = toHtml(JSON.parse(value));
                        } catch (error) {
                            el.innerHTML = value;
                        }
                    }
                }}
                contentEditable
                className="custom-editor p-4 min-h-[200px] !h-[calc(100%-53px)] !overflow-y-auto outline-none focus:ring-1 
                focus:ring-ring rounded-b-md [&_a]:text-blue-500 [&_a]:underline [&_a]:cursor-pointer [&_*]
                :relative [&_*::before]:content-[attr(data-type)] [&_*::before]:absolute [&_*::before]:top-0 [&
                _*::before]:left-0 [&_*::before]:text-xs [&_*::before]:bg-gray-800 [&_*::before]:text-white [&
                _*::before]:px-1 [&_*::before]:rounded [&_*::before]:z-10 [&_*::before]:opacity-70 [&_h1]:my-2 [&
                _h1]:text-2xl [&_h1]:font-bold [&_h2]:my-2 [&_h2]:text-xl [&_h2]:font-bold [&_h3]:my-2 [&_h3]
                :text-lg [&_h3]:font-bold"
                onClick={(e) => {
                    const target = e.target as HTMLElement;
                    if (target.tagName === 'A' && e.ctrlKey) {
                        e.preventDefault();
                        const href = target.getAttribute('href');
                        if (href) {
                            window.open(href, '_blank', 'noopener,noreferrer');
                        }
                    } else {
                        e.preventDefault()
                    }
                }}
                onKeyDown={(e) => {
                    // Handle Enter key to create new paragraph and exit quotes/blockquotes
                    if (e.key === "Enter" && !e.shiftKey) {
                        const selection = window.getSelection();
                        if (selection && selection.rangeCount > 0) {
                            const range = selection.getRangeAt(0);
                            const currentElement = range.commonAncestorContainer.nodeType === Node.TEXT_NODE
                                ? range.commonAncestorContainer.parentElement
                                : range.commonAncestorContainer as Element;

                            // Check if we're inside a blockquote
                            const blockquote = currentElement?.closest('blockquote');
                            if (blockquote) {
                                e.preventDefault();

                                // Create new paragraph after blockquote
                                const newP = document.createElement('p');
                                newP.innerHTML = '<br>';

                                // Insert after the blockquote
                                blockquote.parentNode?.insertBefore(newP, blockquote.nextSibling);

                                // Move cursor to new paragraph
                                const newRange = document.createRange();
                                newRange.setStart(newP, 0);
                                newRange.collapse(true);
                                selection.removeAllRanges();
                                selection.addRange(newRange);
                                return;
                            }
                        }

                        // Default behavior: create paragraph
                        // e.preventDefault();
                        document.execCommand('formatBlock', false, 'p');
                    }
                }}
                onPaste={(e) => {
                    e.preventDefault();
                    const clipboardData = e.clipboardData || (window as any).clipboardData;
                    const pastedText = clipboardData.getData('text/plain');

                    // Split by lines and wrap each in a p tag
                    const lines = pastedText.split('\n');
                    const html = lines.map(line => `<p>${line || '<br>'}</p>`).join('');

                    document.execCommand('insertHTML', false, html);
                }}
                onBlur={(e) => {
                    onChange(e.currentTarget.innerHTML);
                }}
                onInput={(e) => {
                    onChange(e.currentTarget.innerHTML);
                }}
                suppressContentEditableWarning={true}
                style={{ direction: 'rtl' }}
            />
        </div>
    )
}

export default Editor;