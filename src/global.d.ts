// Local ambient declarations for editor/TS server when editing files under src/
declare module '@/*';

declare module 'react' {
  const React: any;
  export default React;
  export function createElement(...args: any[]): any;
  export function useEffect(effect: () => any, deps?: any[]): void;
  export function useLayoutEffect(effect: () => any, deps?: any[]): void;
  export function useMemo<T>(fn: () => T, deps?: any[]): T;
  export function useCallback<T extends (...args: any[]) => any>(fn: T, deps?: any[]): T;
  export function useRef<T>(initial?: T): { current: T | null };
  export function useState<T>(initial?: T): [T, (v: T | ((prev: T) => T)) => void];
  export const Fragment: any;
  export type ReactNode = any;
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

// removed ambient 'next/*' declarations when removing Next.js from the repo
