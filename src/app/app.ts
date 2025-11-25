import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainForm } from "./main-form/main-form";

@Component({
  selector: 'app-root',
  imports: [MainForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'multi-step-form-main';
}
