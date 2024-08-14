// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { CoursesearchPipe } from '../Pipes/coursesearch.pipe';
import { CategorysearchPipe } from '../Pipes/categorysearch.pipe';
import { StudentnavbarComponent } from './studentnavbar/studentnavbar.component';
import { TrainernavbarComponent } from './trainernavbar/trainernavbar.component';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CoursesearchPipe,
    CategorysearchPipe,
    StudentnavbarComponent,
    TrainernavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
    MatSnackBarModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    CoursesearchPipe,
    CategorysearchPipe,
    StudentnavbarComponent,
    MatCardModule,
    MatSnackBarModule
  ]
})
export class SharedModule { }
