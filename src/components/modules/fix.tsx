import { Eraser } from "lucide-react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { EditorModule } from "../../types";
import { renderElementsToHtml, renderHTML } from "@/utils";

// Fix module configuration
export interface FixModuleConfig {
    tooltip?: string;
    hotkey?: string;
}

// Default configuration
const defaultConfig: FixModuleConfig = {
    tooltip: "تصحیح متن",
    hotkey: "Ctrl+F",
};

// Fix module component
export const FixComponent: React.FC<{ config?: FixModuleConfig }> = ({
    config = defaultConfig
}) => {
    const mergedConfig = { ...defaultConfig, ...config };

    const handleFix = () => {
        const editor = document.querySelector('.custom-editor') as HTMLElement;
        if (editor) {
            const val = editor.innerHTML || '';
            try {
                const parseContent = JSON.parse(val);
                const html = renderElementsToHtml(parseContent);
                editor.innerHTML = html;
            } catch (error) {
                try {
                    editor.innerHTML = renderElementsToHtml(val);
                } catch (error) {
                    editor.innerHTML = renderHTML(val);
                }
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
                    onClick={handleFix}
                >
                    <Eraser className="h-4 w-4" />
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
export const FixModule: EditorModule = {
    id: "fix",
    name: "Fix Text",
    icon: Eraser,
    component: FixComponent,
    config: defaultConfig,
};

export default FixModule;