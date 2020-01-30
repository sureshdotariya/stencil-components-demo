import {
  Component,
  Prop,
  JSX,
  Event,
  EventEmitter,
  Host,
  h
} from "@stencil/core";
@Component({
  tag: "modal-dialog",
  styleUrl: "./modal-dialog.scss",
  shadow: true
})
export class ModalDialog {
  @Prop() public title: string;
  @Prop({
    mutable: true,
    reflectToAttr: true
  })
  public visible: boolean;
  @Event() private ok: EventEmitter;
  @Event() private cancel: EventEmitter;

  private handleClick = (type: string) => {
    this.visible = false;
    type === "ok" ? this.ok.emit(true) : this.cancel.emit(true);
  };

  render(): JSX.Element {
    return (
      <Host>
        <div class="wrapper">
          <div class="modal">
            <div class="title">{this.title}</div>
            <div class="content">
              <slot />
            </div>
            <div class="button-container">
              <button class="cancel" onClick={() => this.handleClick("cancel")}>
                Cancel
              </button>
              <button class="ok" onClick={() => this.handleClick("ok")}>
                Ok
              </button>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
