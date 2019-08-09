import { Injectable } from '@angular/core';
import { Student } from '../student';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students:Student[];
  studentupdate:Student;
  constructor(private http:HttpClient) {
    console.log("aa"); 
    this.http.get<Student[]>("../../../assets/db.json").subscribe(data=>this.students=data);
   }
   getStudentsList(){
    console.log("sasa");
    console.log(this.students);
   
     return this.students;
   }
   addStudent(student:Student){
    this.students.push(student);
    
   }
   deleteStudent(id:number){
    this.students=this.students.filter(e=>e.id!=id); 

   }
   setUpdateId(student:Student){
    this.studentupdate=student;
   }
 
  getUpdateId(){
    return this.studentupdate;
  }
  }
   
