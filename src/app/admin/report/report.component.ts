// import { Component, OnInit } from '@angular/core';
// import { AdminService, AdminSearch, ReservationDate2 } from 'src/app/Services/admin.service';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable'; // warning

// @Component({
//   selector: 'app-report',
//   templateUrl: './report.component.html',
//   styleUrls: ['./report.component.css']
// })
// export class ReportComponent implements OnInit {
//   startDate: string = '';
//   endDate: string = '';
//   reservations: AdminSearch[] = [];
//   reservations2: ReservationDate2[] = [];
//   filteredReservations: AdminSearch[] = [];
//   filteredReservations2: ReservationDate2[] = [];

//   constructor(public adminService: AdminService) {}

//   ngOnInit(): void {
//     this.adminService.getallreservation2().subscribe(
//       data => {
//         this.reservations2 = data;
//         this.filteredReservations2 = [...this.reservations2];
//       },
//       error => {
//         console.error('Error retrieving reservations', error);
//       }
//     );
//   }

//   // onSearch(): void {
//   //   const start = this.startDate ? new Date(this.startDate) : null;
//   //   const end = this.endDate ? new Date(this.endDate) : null;

//   //   this.filteredReservations2 = this.reservations2.filter(reservation => {
//   //     const reservationDate = new Date(reservation.reservation_Date);

//   //     if (!start && !end) {
//   //       return true;
//   //     }

//   //     if (!start && end) {
//   //       return reservationDate <= end;
//   //     }

//   //     if (start && !end) {
//   //       return reservationDate >= start;
//   //     }

//   //     if (start && end) {
//   //       return reservationDate >= start && reservationDate <= end;
//   //     }

//   //     return false;
//   //   });
//   // }
//   onSearch(): void {
//     const start = this.startDate ? new Date(this.startDate) : null;
//     const end = this.endDate ? new Date(this.endDate) : null;
  
//     this.filteredReservations2 = this.reservations2.filter(reservation => {
//       const reservationDate = new Date(reservation.reservation_Date);
  
//       if (start && end) {
//         return reservationDate >= start && reservationDate <= end;
//       }
  
//       if (start && !end) {
//         return reservationDate >= start;
//       }
  
//       if (!start && end) {
//         return reservationDate <= end;
//       }
  
//       return true;
//     });
//   }
  

//   clearForm(): void {
//     this.startDate = '';
//     this.endDate = '';
//     this.filteredReservations2 = [...this.reservations2];
//   }

//   generatePdf(): void {
//     const doc = new jsPDF();
//     doc.text('Reservation Report', 14, 16);
//     const head = [['Full Name', 'Course Name', 'Session Name','Final Mark','Completed Status', 'Reservation Date']];
//     const body = this.filteredReservations2.map(reservation2 => [
//       reservation2.user_Full_Name,
//       reservation2.course_Name,
//       reservation2.session_Name,
//       reservation2.final_Mark,
//       reservation2.completed_Status,
     
//       new Date(reservation2.reservation_Date).toLocaleString() 
//     ]);
//     (doc as any).autoTable({
//       head: head,
//       body: body,
//       startY: 20
//     });
//     doc.save('reservation_report.pdf');
//   }
// }
import { Component, OnInit } from '@angular/core';
import { AdminService, AdminSearch, ReservationDate2 } from 'src/app/Services/admin.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // warning

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  startDate: string = '';
  endDate: string = '';
  reservations: AdminSearch[] = [];
  reservations2: ReservationDate2[] = [];
  filteredReservations: AdminSearch[] = [];
  filteredReservations2: ReservationDate2[] = [];

  constructor(public adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getallreservation2().subscribe(
      data => {
        this.reservations2 = data;
        this.filteredReservations2 = [...this.reservations2];
      },
      error => {
        console.error('Error retrieving reservations', error);
      }
    );
  }

  private stripTime(date: Date): Date {
    return new Date(date.toDateString());
  }

  onSearch(): void {
    const start = this.startDate ? this.stripTime(new Date(this.startDate)) : null;
    const end = this.endDate ? this.stripTime(new Date(this.endDate)) : null;

    this.filteredReservations2 = this.reservations2.filter(reservation => {
      const reservationDate = this.stripTime(new Date(reservation.reservation_Date));

      if (start && end) {
        return reservationDate >= start && reservationDate <= end;
      }

      if (start && !end) {
        return reservationDate >= start;
      }

      if (!start && end) {
        return reservationDate <= end;
      }

      return true;
    });
  }

  clearForm(): void {
    this.startDate = '';
    this.endDate = '';
    this.filteredReservations2 = [...this.reservations2];
  }

  generatePdf(): void {
    const doc = new jsPDF();
    doc.text('Reservation Report', 14, 16);
    const head = [['Full Name', 'Course Name', 'Session Name','Final Mark','Completed Status', 'Reservation Date']];
    const body = this.filteredReservations2.map(reservation2 => [
      reservation2.user_Full_Name,
      reservation2.course_Name,
      reservation2.session_Name,
      reservation2.final_Mark,
      reservation2.completed_Status,
      new Date(reservation2.reservation_Date).toLocaleString() 
    ]);
    (doc as any).autoTable({
      head: head,
      body: body,
      startY: 20
    });
    doc.save('reservation_report.pdf');
  }
}

