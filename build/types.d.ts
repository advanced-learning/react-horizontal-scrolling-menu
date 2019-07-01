import { CSSProperties } from 'react';
declare type Data = JSX.Element[];
interface MenuProps {
    alignCenter: boolean;
    alignOnResize: boolean;
    arrowClass: string;
    arrowDisabledClass: string;
    arrowLeft: JSX.Element | null;
    arrowRight: JSX.Element | null;
    clickWhenDrag: boolean;
    dragging: boolean;
    data: Data;
    inertiaScrolling: boolean;
    inertiaScrollingSlowdown: number;
    innerWrapperClass: string;
    itemStyle: CSSProperties;
    itemClass: string;
    itemClassActive: string;
    hideArrows: boolean;
    hideSingleArrow: boolean;
    menuStyle: CSSProperties;
    menuClass: string;
    onSelect: ((selectedItemKey: string | number | null) => void);
    onUpdate: (({ translate, firstItemVisible, lastItemVisible }: {
        translate: number;
        firstItemVisible?: boolean;
        lastItemVisible?: boolean;
    }) => void);
    scrollToSelected: boolean;
    scrollBy: number;
    selected: string;
    translate: number;
    transition: number;
    useButtonRole: boolean;
    wrapperClass: string;
    wrapperStyle: CSSProperties;
    innerWrapperStyle: CSSProperties;
    wheel: boolean;
    xPoint: number;
}
declare type Ref = HTMLDivElement | HTMLElement | null;
interface Item {
    key: string;
    index: number;
    elem: Ref;
}
interface RefObject {
    [key: string]: Item;
}
declare type Void = void | false;
declare type MenuItem = [string, Item];
declare type MenuItems = MenuItem[];
export { Item, MenuProps, Ref, RefObject, Data, Void, MenuItem, MenuItems };
//# sourceMappingURL=types.d.ts.map