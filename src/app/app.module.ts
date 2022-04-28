import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RegisterComponent } from './register/register.component';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserlistComponent } from './userlist/userlist.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { GridModule,EditService, PageService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { BookviewComponent } from './bookview/bookview.component';
import { BookstatusComponent } from './bookstatus/bookstatus.component';
import { BookcardsviewComponent } from './bookcardsview/bookcardsview.component';
import { BooksviewcardComponent } from './booksviewcard/booksviewcard.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserlistComponent,
    BookviewComponent,
    BookstatusComponent,
    BookcardsviewComponent,
    BooksviewcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    DatePickerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    GridModule
    
  ],
  providers: [EditService, PageService, ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
