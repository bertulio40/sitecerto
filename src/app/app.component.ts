// src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="display: flex; align-items: center;">
      <h1 style="flex: 10; text-align: center; font-size: 150px; color: white; font-family: italic; ">
        BRISANET PARCEIRO
      </h1>
    
    </div>
    <div class="container">
    <a href="https://wa.me/message/PJ3J33Y52256H1" target="_blank" rel="noopener noreferrer">
           <button>CLIQUE AQUI E  ASSINE JÀ </button>
      </a>

 <app-image-carousel></app-image-carousel>
    </div>
  `,
 styles: [`
 .container {
   position: relative;
 }

 button {

   bottom: -230px;
   position: absolute;
   left: 30%;
   transform: translateX(-25%);
   font-size: 70px; 
   color: white;
   padding: 10px 20px;
   background-color: orangered;
   border-radius: 60px;
   border: none;
 }
    
`]
})

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  irParaWhatsApp(): void {
    const numeroWhatsApp = '+https://wa.me/message/PJ3J33Y52256H1';
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}`;
    window.location.href = linkWhatsApp;
  }
}
