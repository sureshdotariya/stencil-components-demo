import {
  Component,
  State,
  Prop,
  Method,
  Event,
  EventEmitter,
  Host,
  h,
  JSX
} from "@stencil/core";

@Component({
  tag: "side-menu",
  styleUrl: "./side-menu.scss",
  shadow: true
})
export class SideMenu {
  @State() showContact = false;

  @Prop() title: string;

  @Prop({
    reflectToAttr: true,
    mutable: true
  })
  opened = false;

  @Event() closed: EventEmitter;

  onTabChange = (event: any, opt: string): void => {
    this.showContact = opt === "contact";
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  onClose = event => {
    this.opened = false;
    this.closed.emit(true);
    event.stopPropagation();
  };

  @Method()
  async open(): Promise<void> {
    this.opened = true;
    return;
  }
  render(): JSX.Element {
    let mainContent = <slot />;
    if (this.showContact) {
      mainContent = (
        <div id="contact-information">
          <h2>Contact Info</h2>
          <p>Please reach us via phone or email.</p>
          <ul>
            <li>Phone: 00000000</li>
            <li>
              E-Mail:
              <a href="mailto:demo@demo.com">demo@demo.com</a>
            </li>
          </ul>
        </div>
      );
    }

    return (
      <Host>
        <div class="backdrop" onClick={this.onClose}>
          <aside>
            <header>
              <h1>{this.title}</h1>
              <button onClick={this.onClose}>X</button>
            </header>
            <section id="tabs">
              <button
                class={!this.showContact ? "active" : ""}
                onClick={e => this.onTabChange(e, "nav")}
              >
                Navigation
              </button>
              <button
                class={this.showContact ? "active" : ""}
                onClick={e => this.onTabChange(e, "contact")}
              >
                Contact
              </button>
            </section>
            <main>{mainContent}</main>
          </aside>
        </div>
      </Host>
    );
  }
}
