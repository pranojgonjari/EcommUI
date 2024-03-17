import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { signUp } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller: SellerService) { }
  ngOnInit(): void { 
    this.seller.reloadSeller()
  }
  signUp(data: signUp): void {
    console.warn(data)
    this.seller.userSignup(data);
  }
}
