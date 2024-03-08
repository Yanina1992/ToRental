import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { VeicoliComponent } from './pages/veicoli/veicoli.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddComponent } from './pages/veicoli/add/add.component';
import { ListaVeicoliComponent } from './pages/veicoli/lista-veicoli/lista-veicoli.component';
import { HttpClientModule } from '@angular/common/http';
import { RevisioniComponent } from './pages/home/revisioni/revisioni.component';
import { TagliandiComponent } from './pages/home/tagliandi/tagliandi.component';
import { ContravvenzioniComponent } from './pages/home/contravvenzioni/contravvenzioni.component';
import { AssicurazioniComponent } from './pages/home/assicurazioni/assicurazioni.component';
import { BolliComponent } from './pages/home/bolli/bolli.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    VeicoliComponent,
    AddComponent,
    ListaVeicoliComponent,
    RevisioniComponent,
    TagliandiComponent,
    ContravvenzioniComponent,
    AssicurazioniComponent,
    BolliComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DatePipe,
 ],
  bootstrap: [AppComponent],
})
export class AppModule { }
