import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { LogForm } from './components/log-form/log-form';
import { Logs } from './components/logs/logs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, LogForm, Logs],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('devLogger');
}
