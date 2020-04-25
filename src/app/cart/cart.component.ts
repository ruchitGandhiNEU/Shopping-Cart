import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import {CartService} from "../_service/cart.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(private cartService: CartService, private formBuilder: FormBuilder,private matSnackBar: MatSnackBar) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData){
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    this.matSnackBar.open('Your Order has been submitted');
    console.warn('Your Order has been submitted', customerData);
  }

}
