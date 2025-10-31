/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module '*.jpg' {
  const value: { src: string; width: number; height: number; format: string };
  export default value;
}

declare module '*.jpeg' {
  const value: { src: string; width: number; height: number; format: string };
  export default value;
}

declare module '*.png' {
  const value: { src: string; width: number; height: number; format: string };
  export default value;
}

declare module '*.webp' {
  const value: { src: string; width: number; height: number; format: string };
  export default value;
}

declare module '*.svg' {
  const value: { src: string; width: number; height: number; format: string };
  export default value;
}

declare module '*.gif' {
  const value: { src: string; width: number; height: number; format: string };
  export default value;
}