import { Minus } from "lucide-react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { EditorModule } from "../../types";

// Line module configuration
export interface LineModuleConfig {
    tooltip?: string;
}

// Default configuration
const defaultConfig: LineModuleConfig = {
    tooltip: "خط جداکننده",
};

// Line module component
export const LineComponent: React.FC<{ config?: LineModuleConfig }> = ({
    config = defaultConfig
}) => {
    const mergedConfig = { ...defaultConfig, ...config };

    const insertHr = () => {
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const hr = document.createElement('hr');
            hr.className = 'my-4 border-gray-300';

            // Clear selection and insert HR
            range.deleteContents();
            range.insertNode(hr);

            // Move cursor after the HR
            range.setStartAfter(hr);
            range.setEndAfter(hr);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    };

    return (
        <Tooltip>
            <TooltipTrigger>
                <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={insertHr}
                >
                    <Minus className="h-4 w-4" />
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>{mergedConfig.tooltip}</p>
            </TooltipContent>
        </Tooltip>
    );
};

// Module definition
export const LineModule: EditorModule = {
    id: "line",
    name: "Horizontal Line",
    icon: Minus,
    component: LineComponent,
    config: defaultConfig,
};

export default LineModule;