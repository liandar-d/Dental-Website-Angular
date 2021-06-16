import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServicesComponent } from './services/services.component';
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
import { ExaminationComponent } from './services/examination/examination.component';
import { CrownsAndBridgesComponent } from './services/crowns-and-bridges/crowns-and-bridges.component';
import { HygienistComponent } from './services/hygienist/hygienist.component';
import { CompositeFillingsComponent } from './services/composite-fillings/composite-fillings.component';
import { TeethWhiteningComponent } from './services/teeth-whitening/teeth-whitening.component';
import { VeneersComponent } from './services/veneers/veneers.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'book-an-appointment', component: BookAnAppointmentComponent},
  { path: 'book', component: BookComponent},
  { path: 'robin-chen', component: RobinChenComponent},
  { path: 'seena', component: SeenaGopiComponent},
  { path: 'luisa', component: LuisaAntonioComponent},
  { path: 'deb', component: DeborahDixonComponent},
  { path: 'lydia', component: LydiaPotreousComponent} ,
  { path: 'kayla', component: KaylaFlewellynComponent},
  { path: 'dentures', component: DenturesComponent},
  { path: 'root', component:   RootCanalComponent},
  { path: 'extraction', component:   ExtractionComponent},
  { path: 'exam', component:   ExaminationComponent},
  { path: 'composite', component:   CompositeFillingsComponent},
  { path: 'crowns', component:   CrownsAndBridgesComponent},
  { path: 'hygienist', component:   HygienistComponent},
  { path: 'teeth', component:   TeethWhiteningComponent},
  { path: 'veneers', component:   VeneersComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
