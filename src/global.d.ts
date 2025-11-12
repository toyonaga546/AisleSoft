// Local ambient declarations for editor/TS server when editing files under src/
declare module '@/*';

declare module 'next/link' {
  const Link: any;
  export default Link;
}

declare module 'react' {
  const React: any;
  export default React;
  export const Fragment: any;
  export function createElement(...args: any[]): any;
  export type PropsWithChildren<T> = T & { children?: any };
}

declare module 'react-dom/client' {
  export function createRoot(...args: any[]): any;
  export function hydrateRoot(...args: any[]): any;
}

declare module 'react/jsx-runtime' {
  export function jsx(...args: any[]): any;
  export function jsxs(...args: any[]): any;
  export function jsxDEV(...args: any[]): any;
  export const Fragment: any;
}

declare module 'next/*';
