import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBoatComponent } from './add-boat/add-boat.component';
import { LoginComponent } from './login/login.component';
import { BoatsComponent } from './boats/boats.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
   {path:'',redirectTo:'login',pathMatch:"full"},
   {path: 'login', component: LoginComponent},
   { path: 'add-boat', component:AddBoatComponent},
   { path : 'list-boats', component:BoatsComponent},
   { path:'home', component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
