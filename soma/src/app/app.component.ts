import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SomaComponent } from './pages/soma';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, SomaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'soma';
}
