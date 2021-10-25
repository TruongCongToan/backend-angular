import { NgPrimeComponent } from './ng-prime/ng-prime.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { StudentComponent } from './student/student.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:"",component:HomeComponent},
{path:"home",component:HomeComponent},
{path:"student",component:StudentComponent},
{path:"student-form/:masv",component:StudentFormComponent},
{path:"search/searchTerm",component:StudentComponent},
{path:"ngprime",component:NgPrimeComponent},
{path:"**",component:PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
