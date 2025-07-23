import Provider from "./provider";
import Editor from "./editor";
import { EditorConfig } from "../types";

/**
 * CustomEditor Component
 * 
 * A rich text editor component with Persian/RTL support that provides various formatting options.
 * 
 * Features:
 * - Text alignment (right, center, left, justify)
 * - Text formatting (bold, italic)
 * - Link management (add/remove links)
 * - Text and background color customization
 * - Heading levels (H1, H2, H3)
 * - Blockquotes and horizontal rules
 * - RTL (Right-to-Left) text direction support
 * - Contenteditable with HTML output
 * 
 * @param value - The HTML content of the editor
 * @param onChange - Callback function called when content changes, receives HTML string
 * 
 * @example
 * ```tsx
 * <CustomEditor 
 *   value={htmlContent} 
 *   onChange={(newValue) => setHtmlContent(newValue)} 
 * />
 * ```
 */
const CustomEditor = ({ value, onChange, className, config }: { value: string, onChange: (value: string) => void, className?: string, config?: EditorConfig }) => {
    return (
        <Provider>
            <Editor value={value} onChange={onChange} className={className} config={config} />
        </Provider>
    )
}

export default CustomEditor;
