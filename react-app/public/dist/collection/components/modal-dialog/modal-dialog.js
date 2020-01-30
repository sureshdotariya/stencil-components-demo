import { Host, h } from "@stencil/core";
export class ModalDialog {
    constructor() {
        this.handleClick = (type) => {
            this.visible = false;
            type === "ok" ? this.ok.emit(true) : this.cancel.emit(true);
        };
    }
    render() {
        return (h(Host, null,
            h("div", { class: "wrapper" },
                h("div", { class: "modal" },
                    h("div", { class: "title" }, this.title),
                    h("div", { class: "content" },
                        h("slot", null)),
                    h("div", { class: "button-container" },
                        h("button", { class: "cancel", onClick: () => this.handleClick("cancel") }, "Cancel"),
                        h("button", { class: "ok", onClick: () => this.handleClick("ok") }, "Ok"))))));
    }
    static get is() { return "modal-dialog"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./modal-dialog.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["modal-dialog.css"]
    }; }
    static get properties() { return {
        "title": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "title",
            "reflect": false
        },
        "visible": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "visible",
            "reflect": true
        }
    }; }
    static get events() { return [{
            "method": "ok",
            "name": "ok",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "cancel",
            "name": "cancel",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
