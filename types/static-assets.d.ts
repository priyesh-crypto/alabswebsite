// Allow Figma-exported components under src/imports/* to import their
// PNG / JPG / SVG / GIF assets. Next.js / Turbopack handles these as
// static assets at build time. Without this declaration, TypeScript
// errors on `import imgFoo from "./xyz.png"`.

declare module "*.png" {
  const src: string;
  export default src;
}
declare module "*.jpg" {
  const src: string;
  export default src;
}
declare module "*.jpeg" {
  const src: string;
  export default src;
}
declare module "*.gif" {
  const src: string;
  export default src;
}
declare module "*.webp" {
  const src: string;
  export default src;
}
declare module "*.svg" {
  const src: string;
  export default src;
}
