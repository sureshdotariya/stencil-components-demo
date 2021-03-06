import { r as registerInstance, c as createEvent, h, H as Host } from './core-6f6c2c6c.js';

const ModalDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.handleClick = (type) => {
            this.visible = false;
            type === "ok" ? this.ok.emit(true) : this.cancel.emit(true);
        };
        this.ok = createEvent(this, "ok", 7);
        this.cancel = createEvent(this, "cancel", 7);
    }
    render() {
        return (h(Host, null, h("div", { class: "wrapper" }, h("div", { class: "modal" }, h("div", { class: "title" }, this.title), h("div", { class: "content" }, h("slot", null)), h("div", { class: "button-container" }, h("button", { class: "cancel", onClick: () => this.handleClick("cancel") }, "Cancel"), h("button", { class: "ok", onClick: () => this.handleClick("ok") }, "Ok"))))));
    }
    static get style() { return ":host .wrapper{position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.75);opacity:0;visibility:hidden;-webkit-transition:opacity .25s ease-in-out;transition:opacity .25s ease-in-out;z-index:1}:host .modal{font-size:14px;background-color:#fff;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:5px;min-width:300px}:host .title{font-size:18px;background:#58ca43;display:block;text-align:center;padding:5px 0;border-radius:5px 5px 0 0;color:#fff}:host .content{padding:10px}:host .button-container{text-align:right;margin-bottom:1rem;margin-right:.5rem}:host button{margin-left:5px;min-width:80px;background:#fff;border-radius:5px;padding:3px;color:#000;cursor:pointer}:host button.ok{color:#fff;background:#58ca43;border-color:#58ca43}:host([visible]) .wrapper{opacity:1;visibility:visible}"; }
};

const SideMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        this.closed = createEvent(this, "closed", 7);
    }
    async open() {
        this.opened = true;
        return;
    }
    render() {
        let mainContent = h("slot", null);
        if (this.showContact) {
            mainContent = (h("div", { id: "contact-information" }, h("h2", null, "Contact Info"), h("p", null, "Please reach us via phone or email."), h("ul", null, h("li", null, "Phone: 00000000"), h("li", null, "E-Mail:", h("a", { href: "mailto:demo@demo.com" }, "demo@demo.com")))));
        }
        return (h(Host, null, h("div", { class: "backdrop", onClick: this.onClose }, h("aside", null, h("header", null, h("h1", null, this.title), h("button", { onClick: this.onClose }, "X")), h("section", { id: "tabs" }, h("button", { class: !this.showContact ? "active" : "", onClick: e => this.onTabChange(e, "nav") }, "Navigation"), h("button", { class: this.showContact ? "active" : "", onClick: e => this.onTabChange(e, "contact") }, "Contact")), h("main", null, mainContent)))));
    }
    static get style() { return ":host aside{position:fixed;top:0;left:-100%;width:30rem;max-width:80%;height:100vh;background:#f3f3f3;-webkit-box-shadow:0 2px 8px rgba(0,0,0,.26);box-shadow:0 2px 8px rgba(0,0,0,.26);-webkit-transition:left .3s ease-out;transition:left .3s ease-out;z-index:100}:host header{padding:1rem;background:#58ca43;position:relative}:host header h1{font-size:1.5rem;color:#fff;margin:0}:host header button{position:absolute;top:0;right:0;padding:1rem;color:#fff;background:transparent;font-size:1.5rem;border:none}:host header button:focus{outline:none}:host #tabs{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;width:100%;margin:1rem 0}:host #tabs button{width:30%;background:#fff;color:#58ca43;text-align:center;border:1px solid #58ca43;font:inherit;padding:.15rem 0}:host #tabs button.active,:host #tabs button:active,:host #tabs button:hover{background:#58ca43;color:#fff}:host #tabs button:focus{outline:none}:host #contact-information{padding:0 1rem}:host .backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;background:rgba(0,0,0,.75);z-index:10;opacity:0;pointer-events:none;-webkit-transition:opacity .3s ease-out;transition:opacity .3s ease-out}:host([opened]) aside{left:0}:host([opened]) .backdrop{opacity:1;pointer-events:all}"; }
};

export { ModalDialog as modal_dialog, SideMenu as side_menu };
