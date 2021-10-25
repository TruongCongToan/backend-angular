import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {  FormsModule} from "@angular/forms";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


import { StudentComponent } from './student/student.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { NgPrimeComponent } from './ng-prime/ng-prime.component';

import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    StudentComponent,
    StudentFormComponent,
    NgPrimeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ButtonModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
