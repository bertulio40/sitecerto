// subscribe-button.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-subscribe-button',
  template: `
    <a href="https://api.whatsapp.com/send?phone=+5583981666972" target="_blank" class="subscribe-button">Assine Já</a>
  `,
  styles: [`
    .subscribe-button {
      padding: 30px 30px;
      font-size: 30px;
      background-color: #4CAF50; 
      color: black;
      border: none;
      border-radius: 30px;
      text-decoration: none;
    }
  `],
})
export class SubscribeButtonComponent {}
