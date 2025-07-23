// Base module interface that all modules should implement
export interface EditorModule {
    id: string;
    name: string;
    icon: React.ComponentType<any>;
    component: React.ComponentType<any>;
    config?: Record<string, any>;
}

// Editor configuration interface
export interface EditorConfig {
    modules?: EditorModule[];
    customModules?: EditorModule[];
    excludeModules?: string[];
    moduleConfigs?: Record<string, any>;
}

// Toolbar props interface
export interface ToolbarProps {
    modules?: EditorModule[];
    config?: EditorConfig;
}

// Editor component props
export interface EditorProps {
    value: string;
    onChange: (value: string) => void;
    className?: string;
    config?: EditorConfig;
} 