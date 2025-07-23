import React, { useState } from 'react';
import {
    Editor,
    AlignModule,
    BoldModule,
    ItalicModule,
    EditorConfig,
    EditorModule
} from '../index';

// Example 1: Basic usage with default modules
export const BasicExample = () => {
    const [value, setValue] = useState('<p>Hello World!</p>');

    return (
        <div className="w-full h-96">
            <Editor
                value={value}
                onChange={setValue}
            />
        </div>
    );
};

// Example 2: Custom configuration
export const CustomConfigExample = () => {
    const [value, setValue] = useState('<p>Custom configured editor</p>');

    const config: EditorConfig = {
        moduleConfigs: {
            align: {
                showLeft: false, // Hide left align button
                tooltips: {
                    main: "Custom Text Alignment",
                    right: "Align Right",
                    center: "Align Center"
                }
            },
            bold: {
                tooltip: "Make Bold",
                hotkey: "Ctrl+B"
            }
        }
    };

    return (
        <div className="w-full h-96">
            <Editor
                value={value}
                onChange={setValue}
                config={config}
            />
        </div>
    );
};

// Example 3: Exclude specific modules
export const ExcludeModulesExample = () => {
    const [value, setValue] = useState('<p>Editor without italic</p>');

    const config: EditorConfig = {
        excludeModules: ['italic'] // Remove italic module
    };

    return (
        <div className="w-full h-96">
            <Editor
                value={value}
                onChange={setValue}
                config={config}
            />
        </div>
    );
};

// Example 4: Custom modules only
export const CustomModulesExample = () => {
    const [value, setValue] = useState('<p>Only bold and align</p>');

    const config: EditorConfig = {
        customModules: [AlignModule, BoldModule] // Only these modules
    };

    return (
        <div className="w-full h-96">
            <Editor
                value={value}
                onChange={setValue}
                config={config}
            />
        </div>
    );
};

// Example 5: Creating a custom module
const customModule: EditorModule = {
    id: 'underline',
    name: 'Underline Text',
    icon: ({ className }: { className?: string }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 20h12M8 4v12a4 4 0 004 4 4 4 0 004-4V4" />
        </svg>
    ),
    component: ({ config }: { config?: any }) => (
        <button
            type="button"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
            onClick={() => document.execCommand('underline')}
            title="Underline"
        >
            U
        </button>
    ),
};

export const CustomModuleExample = () => {
    const [value, setValue] = useState('<p>Editor with custom underline module</p>');

    const config: EditorConfig = {
        customModules: [AlignModule, BoldModule, customModule]
    };

    return (
        <div className="w-full h-96">
            <Editor
                value={value}
                onChange={setValue}
                config={config}
            />
        </div>
    );
};

// Example 6: Props-based usage
export const PropsBasedExample = () => {
    const [value, setValue] = useState('<p>Props-based configuration</p>');

    // You can pass modules directly as props too
    const modules = [AlignModule, BoldModule];

    return (
        <div className="w-full h-96">
            <Editor
                value={value}
                onChange={setValue}
                config={{ modules }}
            />
        </div>
    );
}; 