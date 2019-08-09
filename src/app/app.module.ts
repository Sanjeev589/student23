import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentlistComponent } from './student/studentlist/studentlist.component';
import { StartPageComponent } from './student/start-page/start-page.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { SearchStudentComponent } from './student/search-student/search-student.component';
import { ShowSearchComponent } from './student/show-search/show-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentlistComponent,
    StartPageComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    SearchStudentComponent,
    ShowSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
