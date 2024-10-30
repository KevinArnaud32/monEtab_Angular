import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-teacher',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.scss'
})
export class AddTeacherComponent implements OnInit {
  formTeacher!: FormGroup

  ngOnInit(): void {
    this.formTeacher = new FormGroup({
      birthday: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      phoneNumber: new FormControl(''),
      urlPicture: new FormControl(''),
      gender: new FormControl(''),
      available: new FormControl(''),
      speciality: new FormControl('')
    })
  }

  isInvalidInput(field: AbstractControl) {
    return field.invalid && (field.touched || field.dirty)
  }
}
