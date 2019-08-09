import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { Router } from '@angular/router';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  studentupdate:Student;
  
  constructor(private studentService:StudentService,private router:Router) { }

  ngOnInit() {
   this.studentupdate = this.studentService.getUpdateId();
  }

  updateStudent(student:Student){
    student.id=this.studentupdate.id;
    this.studentService.deleteStudent(this.studentupdate.id);
    this.studentService.addStudent(student);
    this.router.navigate(['studentlist']);
  }
}
