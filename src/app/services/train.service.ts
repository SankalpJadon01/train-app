import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Train } from '../train.model';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private http : HttpClient) {
  }
  add(t : Train){
    this.http.post("http://localhost:8080/train/add",t).subscribe(data => data = t);
  }
  list(){
    return this.http.get<Train[]>("http://localhost:8080/train/all");
  }
  findByType(type : string){
    return this.http.get<Train[]>("http://localhost:8080/train/type/"+type);
  }
  findBySatart(start : string){
    return this.http.get<Train[]>("http://localhost:8080/train/start/"+start);
  }
  findByRoute(start : string , end : string){
    return this.http.get<Train[]>("http://localhost:8080/train/route?start="+start+"&end="+end);
  }
}
