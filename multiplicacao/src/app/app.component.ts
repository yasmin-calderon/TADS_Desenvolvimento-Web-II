import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MultiplicacaoComponent } from './pages/multiplicacao';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, MultiplicacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'multiplicacao';
}
