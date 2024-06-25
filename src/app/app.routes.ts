import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {NgModule} from "@angular/core";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {OgloszeniaListComponent} from "./ogloszenia-list/ogloszenia-list.component";
import {OgloszeniaDetailComponent} from "./ogloszenia-detail/ogloszenia-detail.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  { path: 'ogloszenia', component: OgloszeniaListComponent },
  { path: 'ogloszenie/:id', component: OgloszeniaDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
