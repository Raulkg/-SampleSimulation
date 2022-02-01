import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component'; 
import { ResultPageComponent } from './pages/result-page/result-page.component';

const routes: Routes = [
  { path: 'landing', component: LandingPageComponent },
  { path: 'result', component: ResultPageComponent },
  { path: '',   redirectTo: '/landing', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
