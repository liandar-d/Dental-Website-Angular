import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { BookAnAppointmentComponent } from './book-an-appointment/book-an-appointment.component';
import { BookComponent } from './home/book/book.component';
import { RobinChenComponent } from './about/robin-chen/robin-chen.component';
import { SeenaGopiComponent } from './about/seena-gopi/seena-gopi.component';
import { LuisaAntonioComponent } from './about/luisa-antonio/luisa-antonio.component';
import { DeborahDixonComponent } from './about/deborah-dixon/deborah-dixon.component';
import { LydiaPotreousComponent } from './about/lydia-potreous/lydia-potreous.component';
import { KaylaFlewellynComponent } from './about/kayla-flewellyn/kayla-flewellyn.component';
import { DenturesComponent } from './services/dentures/dentures.component';
import { RootCanalComponent } from './services/root-canal/root-canal.component';
import { ExtractionComponent } from './services/extraction/extraction.component';
import { VeneersComponent } from './services/veneers/veneers.component';
import { TeethWhiteningComponent } from './services/teeth-whitening/teeth-whitening.component';
import { HygienistComponent } from './services/hygienist/hygienist.component';
import { CompositeFillingsComponent } from './services/composite-fillings/composite-fillings.component';
import { ExaminationComponent } from './services/examination/examination.component';
import { CrownsAndBridgesComponent } from './services/crowns-and-bridges/crowns-and-bridges.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    GalleryComponent,
    ContactComponent,
    BookAnAppointmentComponent,
    BookComponent,
    RobinChenComponent,
    SeenaGopiComponent,
    LuisaAntonioComponent,
    DeborahDixonComponent,
    LydiaPotreousComponent,
    KaylaFlewellynComponent,
    DenturesComponent,
    RootCanalComponent,
    ExtractionComponent,
    VeneersComponent,
    TeethWhiteningComponent,
    HygienistComponent,
    CompositeFillingsComponent,
    ExaminationComponent,
    CrownsAndBridgesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
