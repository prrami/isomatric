import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-wooden-texture',
  templateUrl: './wooden-texture.component.html',
  styleUrls: ['./wooden-texture.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WoodenTextureComponent implements OnInit {
  products: any = [];
  product: any;
  title:string;
  //subtitle:string;
  constructor(
    private httpClient: HttpClient) {
     }
    
  ngOnInit() {
    this.getProduct();
  }
  
  getProduct(): void {
    
    // this.subtitle=this.route.snapshot.paramMap.get('subtitle');
    // console.log(this.title);
    // console.log(this.subtitle);
    // const id = +this.route.snapshot.paramMap.get('id');
    this.httpClient.get("assets/ProductDetail.json").subscribe(data =>{
      this.products = data;
      console.log(this.products);
      this.product = this.products.filter(x=>x.title === "Wooden Texture")[0];
      //this.product = this.products.filter(x=>x.SubProducts === this.title)[0];
      console.log(this.product);
    })
    }
}
