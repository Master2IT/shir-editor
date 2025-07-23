// Export individual modules
export { default as AlignModule, AlignComponent } from './align';
export { default as BoldModule, BoldComponent } from './bold';
export { default as ItalicModule, ItalicComponent } from './italic';
export { default as ColorModule, ColorComponent } from './color';
export { default as FontSizeModule, FontSizeComponent } from './heading';
export { default as ListModule, ListComponent } from './list';
export { default as QuoteModule, QuoteComponent } from './quote';
export { default as LinkModule, LinkComponent } from './link';
export { default as LineModule, LineComponent } from './line';

// Export types
export type { AlignModuleConfig } from './align';
export type { BoldModuleConfig } from './bold';
export type { ItalicModuleConfig } from './italic';
export type { LinkModuleConfig } from './link';
export type { ColorModuleConfig } from './color';
export type { FontSizeModuleConfig } from './heading';
export type { ListModuleConfig } from './list';
export type { QuoteModuleConfig } from './quote';
export type { LineModuleConfig } from './line';

// Export all modules as a collection
import AlignModule from './align';
import BoldModule from './bold';
import ItalicModule from './italic';
import ColorModule from './color';
import FontSizeModule from './heading';
import ListModule from './list';
import QuoteModule from './quote';
import LinkModule from './link';
import LineModule from './line';

export const defaultModules = [
    AlignModule,
    BoldModule,
    ItalicModule,
    ColorModule,
    FontSizeModule,
    LinkModule,
    // ListModule,
    QuoteModule,
    LineModule,
];

// Export everything from types
export * from '../../types'; 