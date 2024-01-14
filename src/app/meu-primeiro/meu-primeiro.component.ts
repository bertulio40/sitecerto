// meu-primeiro.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meu-primeiro',
  templateUrl: './meu-primeiro.component.html',
  styleUrls: ['./meu-primeiro.component.css']
})
export class MeuPrimeiroComponent {

  constructor(private router: Router) {}

  redirecionar() {
    const linkDestino = 'https://wa.me/message/PJ3J33Y52256H1';
    window.open(linkDestino, '_blank');
  }
}
