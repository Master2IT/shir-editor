import { List, ListOrdered } from "lucide-react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { EditorModule } from "../../types";

// List module configuration
export interface ListModuleConfig {
    bulletTooltip?: string;
    numberedTooltip?: string;
    showBulletList?: boolean;
    showNumberedList?: boolean;
}

// Default configuration
const defaultConfig: ListModuleConfig = {
    bulletTooltip: "لیست نقطه‌ای",
    numberedTooltip: "لیست شماره‌دار",
    showBulletList: true,
    showNumberedList: true,
};

// List module component
export const ListComponent: React.FC<{ config?: ListModuleConfig }> = ({
    config = defaultConfig
}) => {
    const mergedConfig = { ...defaultConfig, ...config };

    return (
        <>
            {mergedConfig.showBulletList && (
                <Tooltip>
                    <TooltipTrigger>
                        <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => document.execCommand('insertUnorderedList')}
                        >
                            <List className="h-4 w-4" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{mergedConfig.bulletTooltip}</p>
                    </TooltipContent>
                </Tooltip>
            )}

            {mergedConfig.showNumberedList && (
                <Tooltip>
                    <TooltipTrigger>
                        <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => document.execCommand('insertOrderedList')}
                        >
                            <ListOrdered className="h-4 w-4" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{mergedConfig.numberedTooltip}</p>
                    </TooltipContent>
                </Tooltip>
            )}
        </>
    );
};

// Module definition
export const ListModule: EditorModule = {
    id: "list",
    name: "Lists",
    icon: List,
    component: ListComponent,
    config: defaultConfig,
};

export default ListModule; 