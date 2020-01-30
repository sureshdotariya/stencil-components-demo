import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "angular-app";
  private subject = new BehaviorSubject<boolean>(false);

  @ViewChild("sidemenu", { static: true }) sidemenu: ElementRef<any>;
  @ViewChild("modaldialog", { static: true }) modaldialog: ElementRef<any>;

  ngOnInit() {
    this.modaldialog.nativeElement.addEventListener(
      "ok",
      this.onModalEvent.bind(this)
    );
    this.modaldialog.nativeElement.addEventListener(
      "cancel",
      this.onModalEvent.bind(this)
    );
  }

  onModalEvent() {
    console.log("onModalEvent");
    this.subject.next(false);
  }

  openSideMenu() {
    this.sidemenu.nativeElement.open();
  }

  get isLoaded() {
    return this.subject.asObservable();
  }

  openModal() {
    this.subject.next(true);
  }
}
