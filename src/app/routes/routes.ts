import {LoginComponent} from "../pages/login/login.component";
import {RecoverComponent} from "../pages/recover/recover.component";
import {Routes} from "@angular/router";
import {ConsultsComponent} from "../pages/consults/consults.component";


const index: Routes = [
  { path: 'login' , component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'recover', component: RecoverComponent },
  { path: 'home', component: ConsultsComponent }
];

export default index;

