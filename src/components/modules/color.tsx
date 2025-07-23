import { Paintbrush, Palette } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { EditorModule } from "../../types";
import { SketchPicker } from "react-color";

// Color module configuration
export interface ColorModuleConfig {
    tooltip?: string;
    colors?: Array<{
        color: string;
        className?: string;
        hoverClassName?: string;
    }>;
    showDefaultColors?: boolean;
}

// Default configuration
const defaultConfig: ColorModuleConfig = {
    tooltip: "تغییر رنگ متن",
};

// Color module component
export const ColorComponent: React.FC<{ config?: ColorModuleConfig }> = ({
    config = defaultConfig
}) => {
    const mergedConfig = { ...defaultConfig, ...config };

    const applyColor = (color: string) => {
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const selectedText = range.toString();

            if (selectedText) {
                // Check if the selected content is already within a span with color
                const parentElement = range.commonAncestorContainer.nodeType === Node.TEXT_NODE
                    ? range.commonAncestorContainer.parentElement
                    : range.commonAncestorContainer as Element;

                const existingColorSpan = parentElement?.closest('span[style*="color"]');

                if (existingColorSpan && range.startContainer === range.endContainer) {
                    // Update existing span color
                    if (color === "auto") {
                        (existingColorSpan as HTMLElement).style.color = document.documentElement.classList.contains('dark') ? '#ffffff' : '#000000';
                    } else {
                        (existingColorSpan as HTMLElement).style.color = color;
                    }
                } else {
                    // Create new span only if text is selected and no existing color span
                    const span = document.createElement('span');
                    if (color === "auto") {
                        span.style.color = document.documentElement.classList.contains('dark') ? '#ffffff' : '#000000';
                    } else {
                        span.style.color = color;
                    }

                    try {
                        range.surroundContents(span);
                    } catch (e) {
                        // Fallback for complex selections
                        span.appendChild(range.extractContents());
                        range.insertNode(span);
                    }
                }

                selection.removeAllRanges();
            }
        }
    };

    return (
        <Tooltip>
            <TooltipTrigger>
                <Popover>
                    <PopoverTrigger>
                        <Button
                            type="button"
                            variant="outline"
                            size="icon"
                        >
                            <Paintbrush className="h-4 w-4" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-2">
                        <div className="flex flex-col gap-2">
                            <input
                                type="color"
                                className="w-full h-10 border border-gray-300 rounded cursor-pointer"
                                defaultValue="#000000"
                                onChange={(e) => {
                                    console.log(e.target.value);
                                    applyColor(e.target.value);
                                }}
                            />
                            <div className="grid grid-cols-6 gap-1">
                                {['#000000', '#ffffff', '#ef4444', '#22c55e', '#0ea5e9', '#eab308'].map((color) => (
                                    <button
                                        key={color}
                                        type="button"
                                        className="w-6 h-6 rounded border border-gray-300 cursor-pointer hover:scale-110 transition-transform"
                                        style={{ backgroundColor: color }}
                                        onClick={() => applyColor(color)}
                                    />
                                ))}
                            </div>
                            <Button
                                size="sm"
                                type="button"
                                variant="outline"
                                onClick={() => applyColor('auto')}
                            >
                                رنگ پیشفرض
                            </Button>
                        </div>
                    </PopoverContent>
                </Popover>
            </TooltipTrigger>
            <TooltipContent>
                <p>{mergedConfig.tooltip}</p>
            </TooltipContent>
        </Tooltip>
    );
};

// Module definition
export const ColorModule: EditorModule = {
    id: "color",
    name: "Text Color",
    icon: Palette,
    component: ColorComponent,
    config: defaultConfig,
};

export default ColorModule;