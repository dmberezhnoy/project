declare module '*.scss' {
    const content: {[key: string]: any}
    export = content
}

declare module "*.jpg";
declare module "*.jpeg";

declare module "*.svg" {
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean;