// 기존의 SVG 모듈 선언
declare module '*.svg' {
    import * as React from 'react';
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

// react-items-carousel 모듈에 대한 선언 추가
declare module 'react-items-carousel';
