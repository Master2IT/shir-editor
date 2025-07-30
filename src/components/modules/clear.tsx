import { Bold, X } from "lucide-react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { EditorModule } from "../../types";

// Bold module configuration
export interface ClearModuleConfig {
    tooltip?: string;
    hotkey?: string;
}

// Default configuration
const defaultConfig: ClearModuleConfig = {
    tooltip: "پاک کردن",
    hotkey: "Ctrl+K",
};

// Clear module component
export const ClearComponent: React.FC<{ config?: ClearModuleConfig }> = ({
    config = defaultConfig
}) => {
    const mergedConfig = { ...defaultConfig, ...config };

    const handleClear = () => {
        const editor = document.querySelector('.custom-editor') as HTMLElement;
        if (editor) {
            const selection = window.getSelection();

            // Check if there's a text selection
            if (selection && selection.rangeCount > 0 && !selection.isCollapsed) {
                // Remove selected text
                selection.deleteFromDocument();
            } else {
                // Clear all content if no selection
                editor.innerHTML = '';
            }

            // Dispatch input event to notify of changes
            editor.dispatchEvent(new Event('input', { bubbles: true }));

            // Focus the editor
            editor.focus();
        }
    };

    return (
        <Tooltip>
            <TooltipTrigger>
                <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={handleClear}
                >
                    <X className="h-4 w-4" />
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
export const ClearModule: EditorModule = {
    id: "clear",
    name: "Clear Text",
    icon: Bold,
    component: ClearComponent,
    config: defaultConfig,
};

export default ClearModule; 