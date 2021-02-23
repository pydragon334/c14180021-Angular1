import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  playera = 0;
  playerb = 0;
  baris = 0;
  kolom = 0;
  isi = {
    isi00: "*",
    isi01: "*",
    isi02: "*",
    isi03: "*",
    isi04: "*",
    isi10: "*",
    isi11: "*",
    isi12: "*",
    isi13: "*",
    isi14: "*",
    isi20: "*",
    isi21: "*",
    isi22: "*",
    isi23: "*",
    isi24: "*",
    isi30: "*",
    isi31: "*",
    isi32: "*",
    isi33: "*",
    isi34: "*",
    isi40: "*",
    isi41: "*",
    isi42: "*",
    isi43: "*",
    isi44: "*"
  };
  buttona() {
    this.baris = (this.playera * 10) / 10;
    this.kolom = (this.playera * 10) % 10
    if(this.baris = 0 & this.kolom = 0){
      
    }
  }
  buttonb() {}
}
