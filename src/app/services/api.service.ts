import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Data} from '../models/data'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get<Data>("https://www.reddit.com/r/Angular2.json")
  }
}
