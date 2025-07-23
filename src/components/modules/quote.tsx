import { Container } from "lucide-react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { EditorModule } from "../../types";
import { toast } from "sonner";

// Quote module configuration
export interface QuoteModuleConfig {
    tooltip?: string;
    showCopyButton?: boolean;
    copyButtonText?: string;
    copySuccessMessage?: string;
}

// Default configuration
const defaultConfig: QuoteModuleConfig = {
    tooltip: "تغییر حالت بلوک",
    showCopyButton: true,
    copyButtonText: "کپی",
    copySuccessMessage: "متن با موفقیت کپی شد",
};

// Quote module component
export const QuoteComponent: React.FC<{ config?: QuoteModuleConfig }> = ({
    config = defaultConfig
}) => {
    const mergedConfig = { ...defaultConfig, ...config };

    const toggleBlockquote = () => {
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const parentElement = range.commonAncestorContainer.nodeType === Node.TEXT_NODE
                ? range.commonAncestorContainer.parentElement
                : range.commonAncestorContainer as Element;
            // Check if already in a blockquote
            const existingBlockquote = parentElement?.closest('blockquote');
            if (existingBlockquote) {
                // Remove blockquote - unwrap the content
                const content = existingBlockquote.innerHTML;
                const wrapper = document.createElement('div');
                wrapper.innerHTML = content;
                existingBlockquote.parentNode?.insertBefore(wrapper, existingBlockquote);
                existingBlockquote.remove();
                // Move contents out of wrapper
                while (wrapper.firstChild) {
                    wrapper.parentNode?.insertBefore(wrapper.firstChild, wrapper);
                }
                // Remove copy button from wrapper content
                const copyButton = wrapper.querySelector('button');
                if (copyButton) {
                    copyButton.remove();
                }
                wrapper.remove();
            } else {
                // Add blockquote
                const blockquote = document.createElement('blockquote');
                const copyBtn = document.createElement('button');
                copyBtn.className = 'custom-editor-copy';
                copyBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>'
                copyBtn.addEventListener('click', () => {
                    console.log(123);

                    const textToCopy = blockquote.textContent || blockquote.innerText || '';
                    navigator.clipboard.writeText(textToCopy)
                        .then(() => {
                            toast.success('کپی شد')
                        })
                        .catch(() => {
                            const textarea = document.createElement('textarea');
                            textarea.value = textToCopy;
                            document.body.appendChild(textarea);
                            textarea.select();
                            document.execCommand('copy');
                            document.body.removeChild(textarea);
                            toast.success('کپی شد')
                        });
                });
                blockquote.className = 'border p-4 rounded-md bg-muted/50 my-2 relative';
                try {
                    range.surroundContents(blockquote);
                } catch (e) {
                    blockquote.appendChild(range.extractContents());
                    range.insertNode(blockquote);
                }
                blockquote.appendChild(copyBtn);
            }
        }
    };

    return (
        <Tooltip>
            <TooltipTrigger>
                <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={toggleBlockquote}
                >
                    <Container className="h-4 w-4" />
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>{mergedConfig.tooltip}</p>
            </TooltipContent>
        </Tooltip>
    );
};

// Module definition
export const QuoteModule: EditorModule = {
    id: "quote",
    name: "Blockquote",
    icon: Container,
    component: QuoteComponent,
    config: defaultConfig,
};

export default QuoteModule;