import { Toaster } from "./ui/sonner";
import { TooltipProvider } from "./ui/tooltip";

const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <TooltipProvider delayDuration={0}>
            {children}

            <Toaster position="top-right" />
        </TooltipProvider>
    )
}

export default Provider;