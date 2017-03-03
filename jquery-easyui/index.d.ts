/**
 * Type definitions for Jquery EasyUI 1.5.1
 *  only for few components, not complete yeat!
 */
declare module JQueryEasyUI {

    type AnimationType = 'slide' | 'fade' | 'show';
    type Selector = string;
    type VoidFunction = () => void;

    interface Action<T> {
        (t: T): void;
    }

    interface Func<T, R> {
        (t: T): R;
    }

    interface PanelOptions {
        id?: string,
        title: string,
        iconCls?: string,
        width: number,
        height: number,
        left?: number,
        top?: number,
        cls?: string,
        headerCls?: string,
        bodyCls?: string,
        style?: CSSStyleDeclaration,
        fit?: boolean,
        border?: boolean,
        doSize?: boolean,
        noheader?: boolean,
        content?: string,
        collapsible?: boolean,
        minimizable?: boolean,
        maximizable?: boolean,
        closable?: boolean,
        //TODO: 需要定义linkbutton接口
        tools?: Selector | Array<any>,
        header?: Selector,
        footer?: Selector,
        openAnimation?: AnimationType,
        openDuration?: number,
        closeAnimation?: AnimationType,
        closeDuration?: number,
        collapsed?: boolean,
        minimized?: boolean,
        maximized?: boolean,
        closed?: boolean,
        href?: string,
        cache?: boolean,
        loadingMessage?: string,
        extractor?: Func<any, boolean>,
        method?: string,
        queryParams?: {},
        loader?: { (param: any, success: (data: any) => {}, error: () => {}): void },

        onBeforeLoad?: { (param: any): boolean },
        onLoad?: VoidFunction,
        onLoadError?: VoidFunction,
        onBeforeOpen?: VoidFunction,
        onOpen?: VoidFunction,
        onBeforeClose?: { (): boolean },
        onClose?: VoidFunction,
        onBeforeDestroy?: { (): boolean },
        onDestroy?: VoidFunction,
        onBeforeCollapse?: { (): boolean },
        onCollapse?: VoidFunction,
        onBeforeExpand?: { (): boolean },
        onExpand?: VoidFunction,
        onResize?: { (width: number, height: number): void },
        onMove?: { (left: number, top: number): void },
        onMaximize?: VoidFunction,
        onRestore?: VoidFunction,
        onMinimize?: VoidFunction
    }
    interface Size {
        top?: number,
        left?: number,
        width: number,
        height: number
    }
}

interface JQuery {
    panel: {
        (options: JQueryEasyUI.PanelOptions): JQuery;
        (methodName: 'options'): JQueryEasyUI.PanelOptions;
        (methodName: 'panel'): JQuery;
        (methodName: 'header'): JQuery;
        (methodName: 'footer'): JQuery;
        (methodName: 'body'): JQuery;
        (methodName: 'setTitle', title: string): JQuery;
        (methodName: 'open', forceOpen: boolean): JQuery;
        (methodName: 'close', forceClose: boolean): JQuery;
        (methodName: 'destroy', forceDestroy: boolean): JQuery;
        (methodName: 'clear'): JQuery;
        (methodName: 'refresh', href: string): JQuery;
        (methodName: 'resize', options: JQueryEasyUI.Size): JQuery;
        (methodName: 'refresh', href: string): JQuery;
        (methodName: 'doLayout'): JQuery;
        (methodName: 'move', point: { top: number, left: number }): JQuery;
        (methodName: 'maximize'): JQuery;
        (methodName: 'minimize'): JQuery;
        (methodName: 'restore'): JQuery;
        (methodName: 'collapse', animate: boolean): JQuery;
        (methodName: 'expand', animate: boolean): JQuery;
        (methodName: 'options'): any;
        (methodName: string, param: any): any;
    }
}