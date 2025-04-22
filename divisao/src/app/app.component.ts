import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DivisaoComponent } from './pages/divisao';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, DivisaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'divisao';
}
