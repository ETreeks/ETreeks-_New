// import { Component, OnInit } from '@angular/core';
// import { FooterService } from 'src/app/Services/footer.service';

// @Component({
//   selector: 'app-footer',
//   templateUrl: './footer.component.html',
//   styleUrls: ['./footer.component.css']
// })
// export class FooterComponent  implements OnInit {
//   Footer: any={};

//   constructor(public footerService: FooterService) {}

//   ngOnInit(): void {
//     this.footerService.getFooterData();
//     // this.Footer = this.footerService.Footer;

// }


// }

import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/Services/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  Footer: any = {};

  constructor(private footerService: FooterService) {}

  ngOnInit(): void {
    this.footerService.footer$.subscribe(data => {
      if (data.length > 0) {
        this.Footer = data[0];
      }
    });
    this.footerService.getFooterData();
  }
}

