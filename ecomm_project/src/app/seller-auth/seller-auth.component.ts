import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent implements OnInit{
  constructor(private seller:SellerService){}
  ngOnInit(): void{}
  signUp(data:object):void{
    console.warn(data)
    this.seller.userSignup(data).subscribe((result:any)=>{

    })
  }
}
