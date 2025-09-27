import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header-component/header-component';
import { FooterComponent } from "./core/components/footer-component/footer-component";
import { MainComponent } from "./core/components/main-component/main-component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, MainComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('projet');
}
