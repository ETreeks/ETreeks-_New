import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TestimonialService } from 'src/app/Services/testimonial.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-testimonialstd',
  templateUrl: './testimonialstd.component.html',
  styleUrls: ['./testimonialstd.component.css']
})
export class TestimonialstdComponent implements OnInit {
  testimonialForm: FormGroup;
  testimonials: any[] = [];
  successMessage: string = '';
  errorMessage: string = '';
  editingTestimonial: any = null; // Track which testimonial is being edited

  constructor(
    private fb: FormBuilder,
    private testimonialService: TestimonialService,
    private router: Router,
    private authService: AuthService
  ) {
    this.testimonialForm = this.fb.group({
      testimonialText: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.loadTestimonials();
  }

  onSubmit(): void {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.testimonialForm.valid) {
      const studentId = this.authService.getStudentIdFromToken(); // Get student ID from token
      if (!studentId) {
        this.errorMessage = 'Unable to get student ID. Please log in again.';
        return;
      }

      const testimonial = {
        id: 0, // Always create a new testimonial
        testimonialstext: this.testimonialForm.value.testimonialText,
        testimonialsstatus: 'Pending',
        gusers_Id: studentId
      };

      this.testimonialService.createTestimonial(testimonial).subscribe(
        response => {
          this.successMessage = 'Testimonial submitted successfully!';
          this.resetForm();  // Reset form after submission
          this.loadTestimonials();  // Reload testimonials
        },
        error => {
          this.errorMessage = 'Error submitting testimonial. Please try again.';
        }
      );
    }
  }

  loadTestimonials(): void {
    this.testimonialService.getAllTestimonials().subscribe(
      data => {
        this.testimonials = data.filter((testimonial: any) => testimonial.testimonialsstatus === 'Approved');
      },
      error => {
        this.errorMessage = 'Error loading testimonials. Please try again.';
      }
    );
  }

  resetForm(): void {
    this.testimonialForm.reset();
    this.editingTestimonial = null;  // Clear editing testimonial
  }
}
