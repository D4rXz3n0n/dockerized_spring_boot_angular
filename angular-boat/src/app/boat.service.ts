import { Injectable } from '@angular/core';
import { Boat } from './boat';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoatService {


  private boatUrl = "/boats";
  private addBoatUrl ="/save";
  private deleteUrl ="/delete/";
  private updateUrl ="/update/";

  constructor(private http:HttpClient) { }


  getBoats():Observable<Boat[]>{
    let authorization = sessionStorage.getItem("authenticatedUser");
    console.log(authorization);
    return this.http.get<Boat[]>("http://localhost:8080/boats");
  }

  addBoat(name:string,description:string):Observable<Boat>{
    return this.http.post<Boat>("http://localhost:8080/",{name:name,description:description});
  }

  delete(id:string){
    return this.http.delete("http://localhost:8080/"+id);
  }

  update(id:string,name:string,description:string){
    return this.http.put<Boat>("http://localhost:8080/"+id,{name:name,description:description});
  }
}
