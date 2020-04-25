import { Component } from '@angular/core';

import { products } from '../products';
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  constructor(private matSnackBar: MatSnackBar) {
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify(){
    this.matSnackBar.open('You will be notified when the product goes on sale');
    // window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
