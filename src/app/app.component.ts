import { Component, OnInit, OnDestroy } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  templateUrl: 'app.component.html',
  selector: 'app-root',
})


export class AppComponent implements OnInit {

  public cookieMessage = "This website uses cookies";
  public cookieDismiss = "Got it!";
  public cookieLinkText = "More information";
  
  constructor(){}

  ngOnInit() {
    let cc = window as any;
    cc.cookieconsent.initialise({
      palette: {
        popup: {
          background: "#164969"
        },
        button: {
          background: "#ffe000",
          text: "#164969"
        }
      },
      theme: "classic",
      content: {
        message: this.cookieMessage,
        dismiss: this.cookieDismiss,
        link: this.cookieLinkText,
        href: "thebigidea.nl/index/dataprivacy" 
      }
    });

}

}