import { Injectable } from '@angular/core';
import { Message } from '../email/emailmessage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = new HttpHeaders({
  'Content-Type': 'application/json'
});

@Injectable()

export class EmailserviceService {

  constructor(private http: HttpClient) { }
  // private apiUrl = 'http://127.0.0.1:5000/v1/email/sendgrid';
  private apiUrl = 'https://ejemplowebappaz.azurewebsites.net/v1/email/sendgrid';

  //Send Email to API
  public sendSendGridEmail(message: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, message, { headers: httpOptions });
  }

 public validateCaptcha(message: Message): Observable<Message> {
  return this.http.post<Message>(this.apiUrl, message, { headers: httpOptions })
 }

}
