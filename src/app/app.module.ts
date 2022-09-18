import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from "./pages/login/login.component";
import { RecoverComponent } from "./pages/recover/recover.component";
import { AppRoutingModule } from "./app-routing.module";
import { ConsultsComponent } from './pages/consults/consults.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { UsersListComponent } from './pages/users-list/users-list.component';
import { AccountComponent } from './pages/account/account.component';
import { PatientsListComponent } from './pages/patients-list/patients-list.component';
import { EditPatientComponent } from './pages/edit-patient/edit-patient.component';
import { NewPatientComponent } from './pages/new-patient/new-patient.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { CreateConsultComponent } from './pages/create-consult/create-consult.component';
import { ListConsultComponent } from './pages/list-consult/list-consult.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {SearchPipe} from "./components/search.pipe";
import { EditConsultComponent } from './pages/edit-consult/edit-consult.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { UserSearchPipe } from './components/user-search.pipe';
import { PatientSearchPipe } from './components/patient-search.pipe';
import {NgxSpinnerModule} from "ngx-spinner";
import {InterceptorService} from "./services/interceptor.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

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
    CreateConsultComponent,
    ListConsultComponent,
    UserSearchPipe,
    PatientSearchPipe,
    SearchPipe,
    EditConsultComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {

}
