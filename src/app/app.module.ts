import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { ServicesComponent } from './services/services.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleSheetService } from './google-sheet.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent,
    AboutComponent,
    PortfolioComponent,
    ContactFormComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GoogleSheetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
