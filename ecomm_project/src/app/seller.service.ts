import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
 
  
  constructor(private http:HttpClient) { }
  userSignup(data:any){
    return this.http.post('http://localhost:9596/seller',data)
  }


  
}
