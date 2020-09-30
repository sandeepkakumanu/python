import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showPassword = false;
  constructor(private auth: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  member:string="Student"
  loginClick() {
    console.log("login")
    console.log(this.member,"user or admin");
    
    if(this.member==="Admin")
    {
      let obj =
      {
        "role": "admin",
        "name": "madan",
        "password": "madan@123"
      }
    console.log(obj,"reqobject");
    
       this.http.post("http://192.168.2.10:8000/admin/api/adminlogin/", obj).subscribe(res => {console.log(res, "response")
        
    }
      ),
      (err=>console.log(err,"error")
      )
    }
    else{
      
    }
     console.log("enters");   
  }
  
  loginType(e){
    this.member=e
  }

 

}
