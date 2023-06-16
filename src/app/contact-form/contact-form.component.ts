import { Component } from '@angular/core';
import { GoogleSheetsService } from '../google-sheets.service';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  constructor(private googleSheetsService: GoogleSheetsService) {}
getuserDetails(details:any)
  {
    
    
       this.googleSheetsService.submitFormData(details);
    
 
}
}