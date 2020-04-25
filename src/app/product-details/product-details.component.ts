import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {products} from "../products";
import {CartService} from '../_service/cart.service';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
    product;

    constructor(private route: ActivatedRoute, private cartService: CartService, private matSnackBar: MatSnackBar) {
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            this.product = products[+params.get('productId')];
        });
    }

    addToCart(product) {
        this.cartService.addToCart(product);
        this.matSnackBar.open(product.name + ' added to the cart!');
    }

}
