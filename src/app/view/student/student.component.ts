import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, NgForm} from '@angular/forms';
import {StudentService} from '../../services/studentService';
import {Router} from '@angular/router';
import {Student} from '../../dtos/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Array<Student> = [];
  selectedStudent: Student = new Student();
  tempStudent: Student = null;
  manuallySelected = false;
  @ViewChild('frmStudents') frmStudents: NgForm;
  constructor(private studentService: StudentService) {



  }
  //
  ngOnInit() {
    this.loadAllStudents();
  }
  loadAllStudents(): void {
    this.studentService.getAllStudents().subscribe(
      (result) => {
        this.students = result;
        console.log(this.students);
      }
    );
  }
  //
  // deleteStudent(student: Student): void {
  //   if (confirm('Are you sure you want to delete this student?')) {
  //     this.studentService.deleteStudent(student.studentID).subscribe(
  //       (result) => {
  //         if (result) {
  //           alert('Student has been deleted successfully');
  //         } else {
  //           alert('Failed to delete the Student');
  //         }
  //         this.loadAllStudents();
  //       }
  //     );
  //   }
  // }
  //
  selectStudent(student: Student): void {
    this.selectedStudent = student;
    this.tempStudent = Object.assign({}, student);
    this.manuallySelected = true;
  }
  //
  // saveStudent(): void {
  //   this.studentService.saveStudent(this.selectedStudent).subscribe(
  //     (result) => {
  //       if (result) {
  //         alert('Student has been saved successfully');
  //         // this.loadAllStudents();
  //       } else {
  //         alert('Failed to save the student');
  //       }
  //     }
  //   );
 // }
  clear(): void {
    let index = this.students.indexOf(this.selectedStudent);
    if (index !== -1) {
      this.students[index] = this.tempStudent;
      this.tempStudent = null;
    }
    this.selectedStudent = new Student();
    this.manuallySelected = false;
  }
  saveStudent(): void {
    this.studentService.saveStudent(this.selectedStudent).subscribe(
      (result) => {
        if (result) {
          alert('Student has been saved successfully');
          this.loadAllStudents();
        } else {
          alert('Failed to save the student');
        }
      }
    );
  }
}
