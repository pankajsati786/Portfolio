import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetsService {
  private readonly url = 'https://sheetdb.io/api/v1/s7ecrw8abi9zz';
  

  constructor(private http: HttpClient) {}

  public submitFormData(data: any): void {
   
    console.log(data)
    const values = [data];
console.log(values)
    this.http.post(this.url, { data}).subscribe(
      response => {
        console.log('Form data submitted successfully.');
        console.log(response);
      },
      error => {
        console.error('Error submitting form data:', error);
      }
    );
  }
}
