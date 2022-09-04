import {LoginComponent} from "../pages/login/login.component";
import {RecoverComponent} from "../pages/recover/recover.component";
import {Routes} from "@angular/router";
import {ConsultsComponent} from "../pages/consults/consults.component";
import { UsersListComponent } from "../pages/users-list/users-list.component";
import { AccountComponent } from "../pages/account/account.component";
import { NewUserComponent } from "../pages/new-user/new-user.component";
import { EditUserComponent } from "../pages/edit-user/edit-user.component";
import { PatientsListComponent } from "../pages/patients-list/patients-list.component";
import { NewPatientComponent } from "../pages/new-patient/new-patient.component";
import { EditPatientComponent } from "../pages/edit-patient/edit-patient.component";
import {CreateConsultComponent} from "../pages/create-consult/create-consult.component";
import {ListConsultComponent} from "../pages/list-consult/list-consult.component";


const index: Routes = [
  { path: 'login' , component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'recover', component: RecoverComponent },
  { path: 'home', component: ConsultsComponent },
  // ADMIN
  { path: 'account', component: AccountComponent},
  { path: 'users-list', component: UsersListComponent},
  { path: 'new-user', component: NewUserComponent},
  { path: 'edit-user', component: EditUserComponent},

  //PSICOLOGO
  { path: 'patients-list', component: PatientsListComponent},
  { path: 'new-patient', component: NewPatientComponent},
  { path: 'edit-patient', component: EditPatientComponent},
  { path: 'consults', component: ConsultsComponent },
  { path: 'create-consult', component: CreateConsultComponent},
  { path: 'history-consult', component: ListConsultComponent}
];

export default index;

