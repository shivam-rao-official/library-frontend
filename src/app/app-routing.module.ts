import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookstatusComponent } from './bookstatus/bookstatus.component';
import { BooksviewcardComponent } from './booksviewcard/booksviewcard.component';
import { BookviewComponent } from './bookview/bookview.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserviewComponent } from './userview/userview.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  { path: 'welcome/login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Userlist', component: UserlistComponent },
  { path: 'book', component: BookviewComponent },
  { path: 'bookstatus', component: BookstatusComponent },
  { path: 'bookview', component: BooksviewcardComponent },
  { path: 'userBookView', component: UserviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
