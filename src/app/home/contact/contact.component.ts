import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

constructor(public homecontact : HomeService){}

  createcontactForm:FormGroup = new FormGroup({ 
    NAME:new FormControl('',[Validators.required]),
    MESSAGE:new FormControl('',[Validators.required]),
    SUBJECT:new FormControl('',[Validators.required]),
    EMAIL1:new FormControl('ex@gmail.com',[Validators.required])
} )
Contact()
{
  this.homecontact.createContact(this.createcontactForm.value);
  //console.log(this.createcontactForm.value);
  this.createcontactForm.reset();
  
}


}
