import { Host, h } from "@stencil/core";
export class SideMenu {
    constructor() {
        this.showContact = false;
        this.opened = false;
        this.onTabChange = (event, opt) => {
            this.showContact = opt === "contact";
            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }
        };
        this.onClose = event => {
            this.opened = false;
            this.closed.emit(true);
            event.stopPropagation();
        };
    }
    async open() {
        this.opened = true;
        return;
    }
    render() {
        let mainContent = h("slot", null);
        if (this.showContact) {
            mainContent = (h("div", { id: "contact-information" },
                h("h2", null, "Contact Info"),
                h("p", null, "Please reach us via phone or email."),
                h("ul", null,
                    h("li", null, "Phone: 00000000"),
                    h("li", null,
                        "E-Mail:",
                        h("a", { href: "mailto:demo@demo.com" }, "demo@demo.com")))));
        }
        return (h(Host, null,
            h("div", { class: "backdrop", onClick: this.onClose },
                h("aside", null,
                    h("header", null,
                        h("h1", null, this.title),
                        h("button", { onClick: this.onClose }, "X")),
                    h("section", { id: "tabs" },
                        h("button", { class: !this.showContact ? "active" : "", onClick: e => this.onTabChange(e, "nav") }, "Navigation"),
                        h("button", { class: this.showContact ? "active" : "", onClick: e => this.onTabChange(e, "contact") }, "Contact")),
                    h("main", null, mainContent)))));
    }
    static get is() { return "side-menu"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./side-menu.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["side-menu.css"]
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
        "opened": {
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
            "attribute": "opened",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "showContact": {}
    }; }
    static get events() { return [{
            "method": "closed",
            "name": "closed",
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
    static get methods() { return {
        "open": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
}
