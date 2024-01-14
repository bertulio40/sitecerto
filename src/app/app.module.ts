import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { SubscribeButtonComponent } from './subscribe-button/subscribe-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    ImageCarouselComponent,
    SubscribeButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
