import {LoginComponent} from "../pages/login/login.component";
import {RecoverComponent} from "../pages/recover/recover.component";
import {Routes} from "@angular/router";
import {ConsultsComponent} from "../pages/consults/consults.component";
import { EmptyStateComponent } from "../pages/empty-state/empty-state.component";
import { UsersListComponent } from "../pages/users-list/users-list.component";
import { NewAdminUserComponent } from "../pages/new-admin-user/new-admin-user.component";
import { AccountComponent } from "../pages/account/account.component";
import { EditAccountComponent } from "../pages/edit-account/edit-account.component";
import { NewSpecialistUserComponent } from "../pages/new-specialist-user/new-specialist-user.component";


const index: Routes = [
  { path: 'login' , component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'recover', component: RecoverComponent },
  { path: 'home', component: ConsultsComponent },
  // ADMIN
  { path: 'empty', component: EmptyStateComponent},
  { path: 'users-list', component: UsersListComponent},
  { path: 'new-admin-user', component: NewAdminUserComponent},
  { path: 'account', component: AccountComponent},
  { path: 'edit-account', component: EditAccountComponent},
  { path: 'new-specialist-user', component: NewSpecialistUserComponent}
];

export default index;

