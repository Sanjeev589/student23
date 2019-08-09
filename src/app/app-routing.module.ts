import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { StartPageComponent } from './student/start-page/start-page.component';
import { StudentlistComponent } from './student/studentlist/studentlist.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { SearchStudentComponent } from './student/search-student/search-student.component';
import { ShowSearchComponent } from './student/show-search/show-search.component';


const routes: Routes = [
  {path:'', redirectTo:'studentlist',pathMatch:'full'},
  {path:'add', component:AddStudentComponent},
  {path:'start', component:StartPageComponent},
  {path:'studentlist', component:StudentlistComponent},
  {path:'update', component:UpdateStudentComponent},
  {path:'search', component:SearchStudentComponent},
  {path:'showsearch', component:ShowSearchComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
