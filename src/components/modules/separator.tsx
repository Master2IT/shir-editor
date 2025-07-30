import { EditorModule } from "@/types";
import { Separator } from "../ui/separator";

const SeparatorComponent = () => {
    return <Separator orientation="vertical" className="!h-6 mx-1 my-auto" />
}

const SeparatorModule: EditorModule = {
    id: "separator",
    name: "Separator",
    icon: () => <Separator orientation="vertical" />,
    component: SeparatorComponent,
}

export default SeparatorModule;