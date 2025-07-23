import { Bold } from "lucide-react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { EditorModule } from "../../types";

// Bold module configuration
export interface BoldModuleConfig {
    tooltip?: string;
    hotkey?: string;
}

// Default configuration
const defaultConfig: BoldModuleConfig = {
    tooltip: "پررنگ",
    hotkey: "Ctrl+B",
};

// Bold module component
export const BoldComponent: React.FC<{ config?: BoldModuleConfig }> = ({
    config = defaultConfig
}) => {
    const mergedConfig = { ...defaultConfig, ...config };

    return (
        <Tooltip>
            <TooltipTrigger>
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
                <p>{mergedConfig.tooltip}</p>
                {mergedConfig.hotkey && (
                    <p className="text-xs opacity-60">{mergedConfig.hotkey}</p>
                )}
            </TooltipContent>
        </Tooltip>
    );
};

// Module definition
export const BoldModule: EditorModule = {
    id: "bold",
    name: "Bold Text",
    icon: Bold,
    component: BoldComponent,
    config: defaultConfig,
};

export default BoldModule; 