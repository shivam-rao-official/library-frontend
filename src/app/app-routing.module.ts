import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookviewComponent } from './bookview/bookview.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent },
  {path:'Register',component:RegisterComponent},
  {path:'Userlist',component:UserlistComponent},
  {path:'book',component:BookviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
