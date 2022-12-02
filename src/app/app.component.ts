import { templateJitUrl } from "@angular/compiler";
import { Component } from "@angular/core";
import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "API";

  mostrar: boolean = false;
  erro: boolean = false;
  cep: string;
  cepNumber: number;
  res: object;

  constructor(private appService: AppService) {}

  fechar(): void {
    this.mostrar = !this.mostrar;
  }

  consultar(): void {
    try{
      this.cepNumber = +this.cep.replace('-', '')
    } catch {

    }
    if (this.cep) {
      this.erro = false;
      this.appService.getUrl(this.cep).subscribe((res) => {
        if (res["erro"]) {
          this.erro=true
          return
        }
        this.fechar();
        this.res = res;
      });
      
    } else {
      this.erro = true
    }
  }
}
