import { EventEmitter, JSX } from "../../stencil.core";
export declare class SideMenu {
    showContact: boolean;
    title: string;
    opened: boolean;
    closed: EventEmitter;
    onTabChange: (event: any, opt: string) => void;
    onClose: (event: any) => void;
    open(): Promise<void>;
    render(): JSX.Element;
}
