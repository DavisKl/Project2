import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http:HttpClient) { }

    getCurrencyData(country: string): Observable<any>{
      let url = 'https://api.frankfurter.app/latest?base='+ country;
      return this.http.get(url);
    }
 
}
