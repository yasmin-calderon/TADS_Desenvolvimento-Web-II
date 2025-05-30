import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SubtracaoComponent } from './pages/subtracao';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, SubtracaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'subtracao';
}
