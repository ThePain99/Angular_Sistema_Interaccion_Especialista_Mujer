import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LoginComponent} from "./pages/login/login.component";
import {RecoverComponent} from "./pages/recover/recover.component";
import {AppRoutingModule} from "./app-routing.module";
import { ConsultsComponent } from './pages/consults/consults.component';
import {NavbarComponent} from "./components/navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecoverComponent,
    NavbarComponent,
    ConsultsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
