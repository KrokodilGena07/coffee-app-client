declare module '*.module.css' {
    interface ClassName {
        [className: string]: string
    }

    const style: ClassName;
    export = style;
}

declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}