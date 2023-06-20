import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService} from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class GoogleSheetsService {
  private readonly url = 'https://sheetdb.io/api/v1/s7ecrw8abi9zz';
  

  constructor(private http: HttpClient,private toastr:ToastrService) {}

  public submitFormData(data: any): void {
   
    console.log(data)
    const values = [data];
console.log(values)
    this.http.post(this.url, { data}).subscribe(
      response => {
        this.toastr.success('Form data submitted successfully',
        'success');
        console.log(response);
      },
      error => {
        console.error('Error submitting form data:', error);
      }
    );
  }
}
