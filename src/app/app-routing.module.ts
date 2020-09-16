import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomesComponent } from './homes/homes.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path: 'homes/:id', component:HomesComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
