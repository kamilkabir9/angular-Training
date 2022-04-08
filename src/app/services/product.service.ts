import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
httpOptions:any;
  constructor(private http:HttpClient
    ) { 

      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      }
    }
  public getProducts():Observable<any>{
  
    return this.http.get("http://localhost:4500/products");
  }

  public getProducts2(pattern:string):Observable<any>{
    return this.http.get("http://localhost:4500/products?type="+pattern);
  }
}
