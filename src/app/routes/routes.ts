import {LoginComponent} from "../pages/login/login.component";
import {RecoverComponent} from "../pages/recover/recover.component";
import {Routes} from "@angular/router";
import {ConsultsComponent} from "../pages/consults/consults.component";
import {CreateConsultComponent} from "../pages/create-consult/create-consult.component";
import {ListConsultComponent} from "../pages/list-consult/list-consult.component";


const index: Routes = [
  { path: 'login' , component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'recover', component: RecoverComponent },
  { path: 'consults', component: ConsultsComponent },
  { path: 'create-consult', component: CreateConsultComponent},
  { path: 'history-consult', component: ListConsultComponent}
];

export default index;

