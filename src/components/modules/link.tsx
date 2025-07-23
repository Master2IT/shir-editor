import { Link, Link2Off } from "lucide-react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { EditorModule } from "../../types";

// Link module configuration
export interface LinkModuleConfig {
    addTooltip?: string;
    removeTooltip?: string;
    urlPrompt?: string;
}

// Default configuration
const defaultConfig: LinkModuleConfig = {
    addTooltip: "لینک",
    removeTooltip: "حذف لینک",
    urlPrompt: "آدرس لینک را وارد کنید:",
};

// Link module component
export const LinkComponent: React.FC<{ config?: LinkModuleConfig }> = ({
    config = defaultConfig
}) => {
    const mergedConfig = { ...defaultConfig, ...config };

    return (
        <>
            {/* Add Link */}
            <Tooltip>
                <TooltipTrigger>
                    <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => {
                            const url = prompt(mergedConfig.urlPrompt);
                            if (url) {
                                document.execCommand('createLink', false, url);
                            }
                        }}
                    >
                        <Link className="h-4 w-4" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{mergedConfig.addTooltip}</p>
                </TooltipContent>
            </Tooltip>

            {/* Remove Link */}
            <Tooltip>
                <TooltipTrigger>
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
                    <p>{mergedConfig.removeTooltip}</p>
                </TooltipContent>
            </Tooltip>
        </>
    );
};

// Module definition
export const LinkModule: EditorModule = {
    id: "link",
    name: "Link Management",
    icon: Link,
    component: LinkComponent,
    config: defaultConfig,
};

export default LinkModule;