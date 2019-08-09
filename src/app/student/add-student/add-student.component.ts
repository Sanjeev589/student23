import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { Student } from 'src/app/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private studentService:StudentService,private router:Router) { }

  ngOnInit() {
  }
  addStudent(student:Student){
    this.studentService.addStudent(student);
    this.router.navigate(['studentlist']);
  }
}
