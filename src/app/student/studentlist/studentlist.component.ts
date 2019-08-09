import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student';
import { StudentService } from 'src/app/service/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  students:Student[];
  constructor(private studentService:StudentService,private router:Router) { }

  ngOnInit() {
    this.students = this.studentService.getStudentsList();
    console.log(this.students);
  }
  deleteStudent(id:number){
    this.studentService.deleteStudent(id);
    this.students = this.studentService.getStudentsList();
  }

  updateStudent(student:Student){
    this.router.navigate(['update']);
    this.studentService.setUpdateId(student);
  }
}
