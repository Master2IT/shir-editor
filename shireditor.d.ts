import { default as default_2 } from 'react';
import { JSX } from 'react/jsx-runtime';

export declare const AlignComponent: React.FC<{
    config?: AlignModuleConfig;
}>;

export declare const AlignModule: EditorModule;

export declare interface AlignModuleConfig {
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

export declare const BoldComponent: React.FC<{
    config?: BoldModuleConfig;
}>;

export declare const BoldModule: EditorModule;

export declare interface BoldModuleConfig {
    tooltip?: string;
    hotkey?: string;
}

export declare const ClearComponent: React.FC<{
    config?: ClearModuleConfig;
}>;

export declare const ClearModule: EditorModule;

export declare interface ClearModuleConfig {
    tooltip?: string;
    hotkey?: string;
}

export declare const ColorComponent: React.FC<{
    config?: ColorModuleConfig;
}>;

export declare const ColorModule: EditorModule;

export declare interface ColorModuleConfig {
    tooltip?: string;
    colors?: Array<{
        color: string;
        className?: string;
        hoverClassName?: string;
    }>;
    showDefaultColors?: boolean;
}

export declare const defaultModules: EditorModule[];

export declare const Editor: React.FC<EditorProps>;

export declare interface EditorConfig {
    modules?: EditorModule[];
    customModules?: EditorModule[];
    excludeModules?: string[];
    moduleConfigs?: Record<string, any>;
}

export declare interface EditorModule {
    id: string;
    name: string;
    icon: React.ComponentType<any>;
    component: React.ComponentType<any>;
    config?: Record<string, any>;
}

export declare interface EditorProps {
    value: string;
    onChange: (value: string) => void;
    className?: string;
    config?: EditorConfig;
}

export declare const FixComponent: React.FC<{
    config?: FixModuleConfig;
}>;

export declare const FixModule: EditorModule;

export declare interface FixModuleConfig {
    tooltip?: string;
    hotkey?: string;
}

export declare const FontSizeComponent: React.FC<{
    config?: FontSizeModuleConfig;
}>;

export declare const FontSizeModule: EditorModule;

export declare interface FontSizeModuleConfig {
    tooltip?: string;
    sizes?: {
        label: string;
        value: string;
    }[];
    placeholder?: string;
}

export declare const ItalicComponent: React.FC<{
    config?: ItalicModuleConfig;
}>;

export declare const ItalicModule: EditorModule;

export declare interface ItalicModuleConfig {
    tooltip?: string;
    hotkey?: string;
}

export declare const LineComponent: React.FC<{
    config?: LineModuleConfig;
}>;

export declare const LineModule: EditorModule;

export declare interface LineModuleConfig {
    tooltip?: string;
}

export declare const LinkComponent: React.FC<{
    config?: LinkModuleConfig;
}>;

export declare const LinkModule: EditorModule;

export declare interface LinkModuleConfig {
    addTooltip?: string;
    removeTooltip?: string;
    urlPrompt?: string;
}

export declare const ListComponent: React.FC<{
    config?: ListModuleConfig;
}>;

export declare const ListModule: EditorModule;

export declare interface ListModuleConfig {
    bulletTooltip?: string;
    numberedTooltip?: string;
    showBulletList?: boolean;
    showNumberedList?: boolean;
}

export declare const Provider: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;

export declare const QuoteComponent: React.FC<{
    config?: QuoteModuleConfig;
}>;

export declare const QuoteModule: EditorModule;

export declare interface QuoteModuleConfig {
    tooltip?: string;
    showCopyButton?: boolean;
    copyButtonText?: string;
    copySuccessMessage?: string;
}

export declare const toHtml: (data: any) => any;

export declare const toJson: (html: string) => any;

export declare const Toolbar: default_2.FC<ToolbarProps>;

export declare interface ToolbarProps {
    modules?: EditorModule[];
    config?: EditorConfig;
}

export { }
