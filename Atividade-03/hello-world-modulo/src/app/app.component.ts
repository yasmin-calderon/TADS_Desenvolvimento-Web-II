import { Component } from '@angular/core';
import { texto } from './modulo1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = texto;
}
