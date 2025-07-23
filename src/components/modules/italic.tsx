import { Italic } from "lucide-react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { EditorModule } from "../../types";

// Italic module configuration
export interface ItalicModuleConfig {
    tooltip?: string;
    hotkey?: string;
}

// Default configuration
const defaultConfig: ItalicModuleConfig = {
    tooltip: "کج",
    hotkey: "Ctrl+I",
};

// Italic module component
export const ItalicComponent: React.FC<{ config?: ItalicModuleConfig }> = ({
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
                    onClick={() => document.execCommand('italic')}
                >
                    <Italic className="h-4 w-4" />
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
export const ItalicModule: EditorModule = {
    id: "italic",
    name: "Italic Text",
    icon: Italic,
    component: ItalicComponent,
    config: defaultConfig,
};

export default ItalicModule; 