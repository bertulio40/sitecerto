import { Component } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  template: `
    <carousel>
      <slide *ngFor="let image of images">
        <img [src]="image.src" [alt]="image.alt" (click)="redirecionar()" style="cursor: pointer;">
      </slide>
    </carousel>
  `,
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent {
  images = [
    { src: 'assets/imagens/500doc.jpeg', alt: 'Imagem 1' },
    { src: 'assets/imagens/500bp.jpeg', alt: 'Imagem 2' },
    { src: 'assets/imagens/500flix.jpeg', alt: 'Imagem 3' },
    { src: 'assets/imagens/500tele.jpeg', alt: 'Imagem 4' },
    { src: 'assets/imagens/300fixo.jpeg', alt: 'Imagem 5' },
    { src: 'assets/imagens/300music.jpeg', alt: 'Imagem 6' },
    { src: 'assets/imagens/600.jpeg', alt: 'Imagem 7' },
    { src: 'assets/imagens/premiere.jpeg', alt: 'Imagem 8' },
    { src: 'assets/imagens/300pm.jpeg', alt: 'Imagem 9' },
    { src: 'assets/imagens/300doc.jpeg', alt: 'Imagem 10' },
    { src: 'assets/imagens/500cine.jpeg', alt: 'Imagem 11' }
  
  
  ];

  redirecionar() {
    
  }
}