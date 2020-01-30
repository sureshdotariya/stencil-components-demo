var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, c as createEvent, h, H as Host } from './core-6f6c2c6c.js';
var ModalDialog = /** @class */ (function () {
    function ModalDialog(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.handleClick = function (type) {
            _this.visible = false;
            type === "ok" ? _this.ok.emit(true) : _this.cancel.emit(true);
        };
        this.ok = createEvent(this, "ok", 7);
        this.cancel = createEvent(this, "cancel", 7);
    }
    ModalDialog.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("div", { class: "wrapper" }, h("div", { class: "modal" }, h("div", { class: "title" }, this.title), h("div", { class: "content" }, h("slot", null)), h("div", { class: "button-container" }, h("button", { class: "cancel", onClick: function () { return _this.handleClick("cancel"); } }, "Cancel"), h("button", { class: "ok", onClick: function () { return _this.handleClick("ok"); } }, "Ok"))))));
    };
    Object.defineProperty(ModalDialog, "style", {
        get: function () { return ":host .wrapper{position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.75);opacity:0;visibility:hidden;-webkit-transition:opacity .25s ease-in-out;transition:opacity .25s ease-in-out;z-index:1}:host .modal{font-size:14px;background-color:#fff;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:5px;min-width:300px}:host .title{font-size:18px;background:#58ca43;display:block;text-align:center;padding:5px 0;border-radius:5px 5px 0 0;color:#fff}:host .content{padding:10px}:host .button-container{text-align:right;margin-bottom:1rem;margin-right:.5rem}:host button{margin-left:5px;min-width:80px;background:#fff;border-radius:5px;padding:3px;color:#000;cursor:pointer}:host button.ok{color:#fff;background:#58ca43;border-color:#58ca43}:host([visible]) .wrapper{opacity:1;visibility:visible}"; },
        enumerable: true,
        configurable: true
    });
    return ModalDialog;
}());
var SideMenu = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.showContact = false;
        this.opened = false;
        this.onTabChange = function (event, opt) {
            _this.showContact = opt === "contact";
            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }
        };
        this.onClose = function (event) {
            _this.opened = false;
            _this.closed.emit(true);
            event.stopPropagation();
        };
        this.closed = createEvent(this, "closed", 7);
    }
    class_1.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.opened = true;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        var mainContent = h("slot", null);
        if (this.showContact) {
            mainContent = (h("div", { id: "contact-information" }, h("h2", null, "Contact Info"), h("p", null, "Please reach us via phone or email."), h("ul", null, h("li", null, "Phone: 00000000"), h("li", null, "E-Mail:", h("a", { href: "mailto:demo@demo.com" }, "demo@demo.com")))));
        }
        return (h(Host, null, h("div", { class: "backdrop", onClick: this.onClose }, h("aside", null, h("header", null, h("h1", null, this.title), h("button", { onClick: this.onClose }, "X")), h("section", { id: "tabs" }, h("button", { class: !this.showContact ? "active" : "", onClick: function (e) { return _this.onTabChange(e, "nav"); } }, "Navigation"), h("button", { class: this.showContact ? "active" : "", onClick: function (e) { return _this.onTabChange(e, "contact"); } }, "Contact")), h("main", null, mainContent)))));
    };
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host aside{position:fixed;top:0;left:-100%;width:30rem;max-width:80%;height:100vh;background:#f3f3f3;-webkit-box-shadow:0 2px 8px rgba(0,0,0,.26);box-shadow:0 2px 8px rgba(0,0,0,.26);-webkit-transition:left .3s ease-out;transition:left .3s ease-out;z-index:100}:host header{padding:1rem;background:#58ca43;position:relative}:host header h1{font-size:1.5rem;color:#fff;margin:0}:host header button{position:absolute;top:0;right:0;padding:1rem;color:#fff;background:transparent;font-size:1.5rem;border:none}:host header button:focus{outline:none}:host #tabs{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;width:100%;margin:1rem 0}:host #tabs button{width:30%;background:#fff;color:#58ca43;text-align:center;border:1px solid #58ca43;font:inherit;padding:.15rem 0}:host #tabs button.active,:host #tabs button:active,:host #tabs button:hover{background:#58ca43;color:#fff}:host #tabs button:focus{outline:none}:host #contact-information{padding:0 1rem}:host .backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;background:rgba(0,0,0,.75);z-index:10;opacity:0;pointer-events:none;-webkit-transition:opacity .3s ease-out;transition:opacity .3s ease-out}:host([opened]) aside{left:0}:host([opened]) .backdrop{opacity:1;pointer-events:all}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { ModalDialog as modal_dialog, SideMenu as side_menu };
