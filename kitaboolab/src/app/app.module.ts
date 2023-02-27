import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KitabooComponent } from './kitaboo/kitaboo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KitabooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  exports: [KitabooComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
