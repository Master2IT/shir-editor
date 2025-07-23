import { TooltipProvider } from "./ui/tooltip";

const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <TooltipProvider delayDuration={0}>
            {children}
        </TooltipProvider>
    )
}

export default Provider;