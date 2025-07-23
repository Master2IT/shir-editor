import React from 'react';
import { ToolbarProps } from '../types';
import { defaultModules } from './modules';

const Toolbar: React.FC<ToolbarProps> = ({
    modules = defaultModules,
    config
}) => {
    // Filter out excluded modules
    const activeModules = modules.filter(module =>
        !config?.excludeModules?.includes(module.id)
    );

    return (
        <div className="flex gap-2 p-2 border-b bg-muted/50">
            {activeModules.map((module) => {
                const ModuleComponent = module.component;
                const moduleConfig = config?.moduleConfigs?.[module.id] || module.config;

                return (
                    <ModuleComponent
                        key={module.id}
                        config={moduleConfig}
                    />
                );
            })}
        </div>
    );
};

export default Toolbar; 