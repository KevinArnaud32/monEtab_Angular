import { Routes } from '@angular/router';
import { AddStudentComponent } from './presentations/student/add-student/add-student.component';
import { AddUserComponent } from './presentations/user/add-user/add-user.component';
import { AddTeacherComponent } from './presentations/teacher/add-teacher/add-teacher.component';

export const routes: Routes = [
    { path: '', component: AddStudentComponent},
    { path: 'addUser', component: AddUserComponent},
    { path: 'addTeacher', component: AddTeacherComponent}
];
