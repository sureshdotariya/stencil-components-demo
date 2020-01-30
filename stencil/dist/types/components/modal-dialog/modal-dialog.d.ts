import { JSX } from "../../stencil.core";
export declare class ModalDialog {
    title: string;
    visible: boolean;
    private ok;
    private cancel;
    private handleClick;
    render(): JSX.Element;
}
