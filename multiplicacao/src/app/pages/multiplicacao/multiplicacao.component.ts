import { Component } from '@angular/core';
import { MultiplicacaoService } from '../../services';

@Component({
  selector: 'app-multiplicacao',
  standalone: true,
  imports: [],
  templateUrl: './multiplicacao.component.html',
  styleUrl: './multiplicacao.component.css'
})
export class MultiplicacaoComponent {
  private res : number = 0;

  constructor(
    private multiplicaoService: MultiplicacaoService
  ){}

  multiplicarBotao(numero1:string, numero2:string):void{
    let num1 = parseFloat(numero1);
    let num2 = parseFloat(numero2);

    this.res = this.multiplicaoService.multiplicar(num1,num2);
  }

  get resultado():string{
    return this.res.toString();
  }

}
