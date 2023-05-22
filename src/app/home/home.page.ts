import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  public resultado: string='...';
  public precoAlcool: string='';
  public precoGasolina: string='';

  public calcular(){
    if(this.precoAlcool && this.precoGasolina){
      var pAlcool = parseFloat(this.precoAlcool)
      var pGasolina = parseFloat(this.precoGasolina)

      if(pAlcool/pGasolina>=0.7){
        this.resultado = 'Gasolina é melhor!'
      }else{
        this.resultado = 'Alcool é melhor!'
      }
    }else{
      this.resultado = 'Não Preenchido'
    }
  }
}
