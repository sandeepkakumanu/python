import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  public baseUrl:string="http://192.168.2.10:8000";
  login(req){
   console.log(req,"req");
   
  return this.http.post(this.baseUrl+"/admin/api/adminlogin/",req);
  

  }


}
