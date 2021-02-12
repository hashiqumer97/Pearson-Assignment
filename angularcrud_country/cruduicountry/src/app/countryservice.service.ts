import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryserviceService {

  constructor(private http: HttpClient) { }

  fetchCountryListFromBackEnd(): Observable<any>{
    return this.http.get<any>("http://localhost:8080/rest/v2/getcountrylist");
  }

  addCountryToBackEnd(country: country): Observable<any>{
    return this.http.post<any>("http://localhost:8080/rest/v2/addcountry", country);
  }

  modifyCountryToBackEnd(country: country): Observable<any>{
    return this.http.put<any>("http://localhost:8080/rest/v2/modifycountry", country);
  }

  fetchCountryByIdFromBackEnd(id: number): Observable<any>{
    return this.http.get<any>("http://localhost:8080/rest/v2/getcountrybyid/"+id);
    }

  deleteCountryByIdFromBackEnd(id: number): Observable<any>{
    return this.http.delete<any>("http://localhost:8080/rest/v2/deletecountrybyid/"+id);
  }
}
