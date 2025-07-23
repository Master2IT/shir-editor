import { Bold, Italic, Link, Container, Link2Off, Minus, Palette, AlignJustify, AlignLeft, AlignCenter, AlignRight } from "lucide-react"
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";

const Toolbar = () => {
    return (
        <div className="flex gap-2 p-2 border-b bg-muted/50">
            {/* Align */}
            <Popover>
                <PopoverTrigger>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button
                                type="button"
                                variant="outline"
                                size="icon"
                            >
                                <AlignJustify className="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>تراز متن</p>
                        </TooltipContent>
                    </Tooltip>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-2">
                    <div className="flex gap-1">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="icon"
                                    onClick={() => document.execCommand('justifyRight')}
                                >
                                    <AlignRight className="h-4 w-4" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>راست</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="icon"
                                    onClick={() => document.execCommand('justifyCenter')}
                                >
                                    <AlignCenter className="h-4 w-4" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>وسط</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="icon"
                                    onClick={() => document.execCommand('justifyLeft')}
                                >
                                    <AlignLeft className="h-4 w-4" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>چپ</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </PopoverContent>
            </Popover>
            {/* Bold */}
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => document.execCommand('bold')}
                    >
                        <Bold className="h-4 w-4" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>پررنگ</p>
                </TooltipContent>
            </Tooltip>
            {/* Italic */}
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => document.execCommand('italic')}
                    >
                        <Italic className="h-4 w-4" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>کج</p>
                </TooltipContent>
            </Tooltip>
            {/* Heading */}
            <Tooltip>
                <TooltipTrigger asChild>
                    <Select onValueChange={(value) => document.execCommand('formatBlock', false, value)}>
                        <SelectTrigger className="w-32">
                            <SelectValue placeholder="عنوان" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="p">متن عادی</SelectItem>
                            <SelectItem value="h1" className="flex items-center gap-2">
                                <span className="text-2xl font-bold">عنوان ۱</span>
                            </SelectItem>
                            <SelectItem value="h2" className="flex items-center gap-2">
                                <span className="text-xl font-bold">عنوان ۲</span>
                            </SelectItem>
                            <SelectItem value="h3" className="flex items-center gap-2">
                                <span className="text-lg font-bold">عنوان ۳</span>
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </TooltipTrigger>
                <TooltipContent>
                    <p>انتخاب نوع عنوان</p>
                </TooltipContent>
            </Tooltip>
            {/* Link */}
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => {
                            const url = prompt('آدرس لینک را وارد کنید:');
                            if (url) {
                                document.execCommand('createLink', false, url);
                            }
                        }}
                    >
                        <Link className="h-4 w-4" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>لینک</p>
                </TooltipContent>
            </Tooltip>
            {/* Unlink */}
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => document.execCommand('unlink')}
                    >
                        <Link2Off className="h-4 w-4" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>حذف لینک</p>
                </TooltipContent>
            </Tooltip>
            {/* Blockquote */}
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => {
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
                                        const textToCopy = blockquote.textContent || blockquote.innerText || '';
                                        navigator.clipboard.writeText(textToCopy)
                                            .then(() => {
                                                toast.success('متن با موفقیت کپی شد')
                                            })
                                            .catch(() => {
                                                const textarea = document.createElement('textarea');
                                                textarea.value = textToCopy;
                                                document.body.appendChild(textarea);
                                                textarea.select();
                                                document.execCommand('copy');
                                                document.body.removeChild(textarea);
                                                toast.success('متن با موفقیت کپی شد')
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
                        }}
                    >
                        <Container className="h-4 w-4" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>تغییر حالت بلوک</p>
                </TooltipContent>
            </Tooltip>
            {/* Hr */}
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => {
                            const selection = window.getSelection();
                            if (selection && selection.rangeCount > 0) {
                                const range = selection.getRangeAt(0);

                                // Create hr element
                                const hr = document.createElement('hr');
                                hr.className = 'my-4 border-border';

                                // Insert the hr at the current position
                                range.deleteContents();
                                range.insertNode(hr);

                                // Move cursor after the hr
                                range.setStartAfter(hr);
                                range.collapse(true);
                                selection.removeAllRanges();
                                selection.addRange(range);
                            }
                        }}
                    >
                        <Minus className="h-4 w-4" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>درج خط جداکننده</p>
                </TooltipContent>
            </Tooltip>
            {/* Color */}
            <Tooltip>
                <TooltipTrigger>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                type="button"
                                variant="outline"
                                size="icon"
                            >
                                <Palette className="h-4 w-4" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-2">
                            <div className="flex gap-2">
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    className="w-8 h-8 p-0 bg-red-500 hover:bg-red-600"
                                    onClick={() => {
                                        const selection = window.getSelection();
                                        if (selection && selection.rangeCount > 0) {
                                            const range = selection.getRangeAt(0);
                                            const selectedText = range.toString();

                                            if (selectedText) {
                                                const span = document.createElement('span');
                                                span.style.color = '#ef4444';
                                                span.textContent = selectedText;

                                                range.deleteContents();
                                                range.insertNode(span);
                                                selection.removeAllRanges();
                                            }
                                        }
                                    }}
                                />
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    className="w-8 h-8 p-0 bg-green-500 hover:bg-green-600"
                                    onClick={() => {
                                        const selection = window.getSelection();
                                        if (selection && selection.rangeCount > 0) {
                                            const range = selection.getRangeAt(0);
                                            const selectedText = range.toString();

                                            if (selectedText) {
                                                const span = document.createElement('span');
                                                span.style.color = '#22c55e';
                                                span.textContent = selectedText;

                                                range.deleteContents();
                                                range.insertNode(span);
                                                selection.removeAllRanges();
                                            }
                                        }
                                    }}
                                />
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    className="w-8 h-8 p-0 bg-blue-500 hover:bg-blue-600"
                                    onClick={() => {
                                        const selection = window.getSelection();
                                        if (selection && selection.rangeCount > 0) {
                                            const range = selection.getRangeAt(0);
                                            const selectedText = range.toString();

                                            if (selectedText) {
                                                const span = document.createElement('span');
                                                span.style.color = '#3b82f6';
                                                span.textContent = selectedText;

                                                range.deleteContents();
                                                range.insertNode(span);
                                                selection.removeAllRanges();
                                            }
                                        }
                                    }}
                                />
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    className="w-8 h-8 p-0 bg-yellow-500 hover:bg-yellow-600"
                                    onClick={() => {
                                        const selection = window.getSelection();
                                        if (selection && selection.rangeCount > 0) {
                                            const range = selection.getRangeAt(0);
                                            const selectedText = range.toString();

                                            if (selectedText) {
                                                const span = document.createElement('span');
                                                span.style.color = '#eab308';
                                                span.textContent = selectedText;

                                                range.deleteContents();
                                                range.insertNode(span);
                                                selection.removeAllRanges();
                                            }
                                        }
                                    }}
                                />
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    className="w-8 h-8 p-0 bg-black dark:bg-white hover:bg-black/10 dark:hover:bg-white/10 border"
                                    onClick={() => {
                                        const selection = window.getSelection();
                                        if (selection && selection.rangeCount > 0) {
                                            const range = selection.getRangeAt(0);
                                            const selectedText = range.toString();

                                            if (selectedText) {
                                                const span = document.createElement('span');
                                                span.style.color = document.documentElement.classList.contains('dark') ? '#ffffff' : '#000000';
                                                span.textContent = selectedText;

                                                range.deleteContents();
                                                range.insertNode(span);
                                                selection.removeAllRanges();
                                            }
                                        }
                                    }}
                                />
                            </div>
                        </PopoverContent>
                    </Popover>
                </TooltipTrigger>
                <TooltipContent>
                    <p>تغییر رنگ متن</p>
                </TooltipContent>
            </Tooltip>
        </div>
    )
}

export default Toolbar;