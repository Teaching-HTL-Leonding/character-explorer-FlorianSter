import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface AirTableFields{
  id: number
  name: string
  alias: string
  image: string
}
export interface AirTableData{
  records: AirTableRecord[];
}
export interface AirTableRecord{
  fields: AirTableFields;
}

@Injectable({
  providedIn: 'root'
})
export class AirTableService {

  constructor(
    private http: HttpClient,
    @Inject('AIRTABLE_CHARACTERS_URL') private url: string,
    @Inject('AIRTABLE_ACCESS_TOKEN') private accessToken: string) { }

  postData(data: AirTableData): Observable<any>{
    const headers = {
      'Authorization': 'Bearer ' + this.accessToken
    };
    return this.http.post(this.url, data, {headers});
  }

  getData(): Observable<AirTableData>{
    const headers = {
      'Authorization': 'Bearer ' + this.accessToken
    };
    return this.http.get<AirTableData>(this.url, {headers});
  }
}
