import React from "react";
declare type useDraggableType = <T extends HTMLElement>() => {
    target: React.RefObject<T>;
};
declare const useDraggable: useDraggableType;
export default useDraggable;
