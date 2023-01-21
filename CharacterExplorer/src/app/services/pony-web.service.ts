import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface PonyItem {
  id: number
  name: string
  alias: string
  url: string
  sex: string
  residence: string
  occupation: string
  kind: string[]
  image: string[]
}
export interface PonyResult{
  data: PonyItem[];
}

@Injectable({
  providedIn: 'root'
})
export class PonyWebService {

  constructor(private http: HttpClient ,@Inject('PONY_WEB_URL') private url: string) {
   }

   getData(): Observable<PonyResult>{
    return this.http.get<PonyResult>(this.url);
   }


}
