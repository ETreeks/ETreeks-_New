import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent  implements OnInit {
  
  constructor(public home:HomeService){}
  
  ngOnInit(): void {
 this.home.DisplayAllAcceptedTrainers();
  }

}
