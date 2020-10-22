import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';

const HttpOptions = {
  headers: new HttpHeaders({"Content-Type":"application/json"})
};
@Injectable({
  providedIn: 'root'
})
export class TypeService {
a: any;
  private apiURL = "https://localhost:44385/api/LoaiSanPhams";
  constructor(private _http: HttpClient) { }
  getList(): Observable<any[]>{  
    return this._http.get<any[]>(this.apiURL).pipe(
          map(res  => {
            return res;
          }));
  } 
  postItem(a):Observable<any>{
    debugger;
    return this._http.post<any>(this.apiURL,a,HttpOptions).pipe(map(res =>{
      return res;
    }));
  }
  Delete(id: string): Observable<any> {
    debugger;
    return this._http.delete(this.apiURL +"/" +id).pipe(map(res =>{
      return res;
    }));
  }
}
