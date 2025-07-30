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
export { default as ClearModule, ClearComponent } from './clear';
export { default as FixModule, FixComponent } from './fix';

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
export type { ClearModuleConfig } from './clear';
export type { FixModuleConfig } from './fix';

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
import ClearModule from './clear';
import FixModule from './fix';
import SeparatorModule from './separator';

export const defaultModules = [
    AlignModule,
    SeparatorModule,
    BoldModule,
    ItalicModule,
    ColorModule,
    SeparatorModule,
    FontSizeModule,
    SeparatorModule,
    LinkModule,
    // ListModule,
    SeparatorModule,
    QuoteModule,
    LineModule,
    SeparatorModule,
    ClearModule,
    FixModule,
];

// Export everything from types
export * from '../../types'; 