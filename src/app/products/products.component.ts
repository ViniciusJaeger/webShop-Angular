import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products = [
    {id: 1, name: 'Bolo', price: '30', color: 'Brown', available: 'Available', image: 'assets/products/bolo.png'},
    {id: 2, name: 'Pão', price: '1', color: 'Yellow', available: 'Not Available', image: 'assets/products/pao.png'},
    {id: 3, name: 'Sonho', price: '5', color: 'Brown', available: 'Available', image: 'assets/products/sonho.png'},
    {id: 4, name: 'Cuca', price: '15', color: 'Brown', available: 'Not Available', image: 'assets/products/cuca.png'},
    {id: 5, name: 'Orelha de gato', price: '3', color: 'Brown', available: 'Available', image: 'assets/products/orelhagato.png'},
    {id: 6, name: 'Cookie', price: '8', color: 'Brown', available: 'Available', image: 'assets/products/cookie.png'}
  ]

  getTotalProducts(){
    return this.products.length;
  }

  getTotalAvailableProducts(){
    return this.products.filter(product => product.available === 'Available').length;
  }

  getTotalNotAvailableProducts(){
    return this.products.filter(product => product.available === 'Not Available').length; 
  }
  
  productCountRadioButton: string = 'All';

  onfilterRadioButtonChanged(data: string){
    this.productCountRadioButton = data;
  }
}
