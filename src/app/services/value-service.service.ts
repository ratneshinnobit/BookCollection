import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { IValues } from '../core/model/values.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueServiceService {
  baseURL=environment.baseUrls.api

  constructor(private http:HttpClient) { }
  getValues(): Observable<IValues> {
    return this.http.get<IValues>(`${this.baseURL}/about/values`);
  }
  
}
