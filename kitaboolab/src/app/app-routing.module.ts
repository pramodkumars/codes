import { KitabooComponent } from './kitaboo/kitaboo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:  '', pathMatch: 'full', component:  KitabooComponent},
  { path:  'home', component:  HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
