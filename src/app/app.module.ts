import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LoginComponent} from "./pages/login/login.component";
import {RecoverComponent} from "./pages/recover/recover.component";
import {AppRoutingModule} from "./app-routing.module";
import { ConsultsComponent } from './pages/consults/consults.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import { UsersListComponent } from './pages/users-list/users-list.component';
import { AccountComponent } from './pages/account/account.component';
import { PatientsListComponent } from './pages/patients-list/patients-list.component';
import { EditPatientComponent } from './pages/edit-patient/edit-patient.component';
import { NewPatientComponent } from './pages/new-patient/new-patient.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { NewUserComponent } from './pages/new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecoverComponent,
    NavbarComponent,
    ConsultsComponent,
    NavbarComponent,
    UsersListComponent,
    AccountComponent,
    PatientsListComponent,
    EditPatientComponent,
    NewPatientComponent,
    EditUserComponent,
    NewUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
