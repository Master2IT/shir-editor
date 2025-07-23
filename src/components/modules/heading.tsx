import { Type } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { EditorModule } from "../../types";

// Font size module configuration
export interface FontSizeModuleConfig {
    tooltip?: string;
    sizes?: { label: string; value: string }[];
    placeholder?: string;
}

// Default configuration
const defaultConfig: FontSizeModuleConfig = {
    tooltip: "اندازه فونت",
    placeholder: "اندازه",
    sizes: [
        { label: "کوچک", value: "12px" },
        { label: "متوسط", value: "14px" },
        { label: "عادی", value: "16px" },
        { label: "بزرگ", value: "18px" },
        { label: "خیلی بزرگ", value: "24px" },
    ],
};

// Font size module component
export const FontSizeComponent: React.FC<{ config?: FontSizeModuleConfig }> = ({
    config = defaultConfig
}) => {
    const mergedConfig = { ...defaultConfig, ...config };

    const applyFontSize = (size: string) => {
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const selectedText = range.toString();

            if (selectedText) {
                const span = document.createElement('span');
                span.style.fontSize = size;
                span.textContent = selectedText;

                range.deleteContents();
                range.insertNode(span);
                selection.removeAllRanges();
            }
        }
    };

    return (
        <Tooltip>
            <TooltipTrigger>
                <Select onValueChange={applyFontSize}>
                    <SelectTrigger className="w-24">
                        <SelectValue placeholder={mergedConfig.placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                        {mergedConfig.sizes?.map((size) => (
                            <SelectItem key={size.value} value={size.value}>
                                <span style={{ fontSize: size.value }}>{size.label}</span>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </TooltipTrigger>
            <TooltipContent>
                <p>{mergedConfig.tooltip}</p>
            </TooltipContent>
        </Tooltip>
    );
};

// Module definition
export const FontSizeModule: EditorModule = {
    id: "fontsize",
    name: "Font Size",
    icon: Type,
    component: FontSizeComponent,
    config: defaultConfig,
};

export default FontSizeModule; 