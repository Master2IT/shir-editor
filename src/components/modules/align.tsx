import { AlignJustify, AlignLeft, AlignCenter, AlignRight } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { EditorModule } from "../../types";

// Align module configuration
export interface AlignModuleConfig {
    showJustify?: boolean;
    showLeft?: boolean;
    showCenter?: boolean;
    showRight?: boolean;
    tooltips?: {
        main?: string;
        left?: string;
        center?: string;
        right?: string;
    };
}

// Default configuration
const defaultConfig: AlignModuleConfig = {
    showJustify: true,
    showLeft: true,
    showCenter: true,
    showRight: true,
    tooltips: {
        main: "تراز متن",
        left: "چپ",
        center: "وسط",
        right: "راست",
    },
};

// Align module component
export const AlignComponent: React.FC<{ config?: AlignModuleConfig }> = ({
    config = defaultConfig
}) => {
    const mergedConfig = { ...defaultConfig, ...config };

    return (
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
                        <p>{mergedConfig.tooltips?.main}</p>
                    </TooltipContent>
                </Tooltip>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-2">
                <div className="flex gap-1">
                    {mergedConfig.showRight && (
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
                                <p>{mergedConfig.tooltips?.right}</p>
                            </TooltipContent>
                        </Tooltip>
                    )}
                    {mergedConfig.showCenter && (
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
                                <p>{mergedConfig.tooltips?.center}</p>
                            </TooltipContent>
                        </Tooltip>
                    )}
                    {mergedConfig.showLeft && (
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
                                <p>{mergedConfig.tooltips?.left}</p>
                            </TooltipContent>
                        </Tooltip>
                    )}
                </div>
            </PopoverContent>
        </Popover>
    );
};

// Module definition that can be imported and used
export const AlignModule: EditorModule = {
    id: "align",
    name: "Text Alignment",
    icon: AlignJustify,
    component: AlignComponent,
    config: defaultConfig,
};

// Export everything
export default AlignModule;
