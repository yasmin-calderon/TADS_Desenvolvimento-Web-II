import { Component } from '@angular/core';
import { SubtracaoService } from '../../services';

@Component({
  selector: 'app-subtracao',
  standalone: true,
  imports: [],
  templateUrl: './subtracao.component.html',
  styleUrl: './subtracao.component.css'
})
export class SubtracaoComponent {
  private res:number = 0;

  constructor (
    private subtracaoService:SubtracaoService
  ){}

  subtrairBotao(numero1:string, numero2:string):void{
    let n1 = parseFloat(numero1);
    let n2 = parseFloat(numero2);

    this.res = this.subtracaoService.subtrair(n1, n2);
  }

  get resultado():string{
    return this.res.toString();
  }
}
