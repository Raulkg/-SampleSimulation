import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { PageComponent } from './shared/page/page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';
import { WssDataOutputComponent } from './shared/wss-data-output/wss-data-output.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    LandingPageComponent,
    ResultPageComponent,
    WssDataOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
