import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComplaintModel, ReplyModel } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  httpOptions: any;
  constructor(private http: HttpClient
  ) {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  public addComplaint(complaint: ComplaintModel): Observable<any> {
    return this.http.post("http://localhost:4500/complaints", complaint);
  }


  public addReply(reply: ReplyModel): Observable<any> {
    return this.http.post("http://localhost:4500/replys", reply);
  }
  public getReply(id: number): Observable<any> {
    return this.http.get("http://localhost:4500/replys?id=" + id);
  }

  public getComplaints(): Observable<any> {

    return this.http.get("http://localhost:4500/complaints");
  }

  public getComplaint(id: number): Observable<any> {
    return this.http.get("http://localhost:4500/complaints?id=" + id);
  }
}
