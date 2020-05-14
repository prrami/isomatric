import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit {
  products: any = [];
  product: any;
  title:string;
  //subtitle:string;
  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient) {
     }
    
  ngOnInit() {
    this.getProduct();
  }
  
  getProduct(): void {
    this.title=this.route.snapshot.paramMap.get('title');
    // this.subtitle=this.route.snapshot.paramMap.get('subtitle');
    // console.log(this.title);
    // console.log(this.subtitle);
    // const id = +this.route.snapshot.paramMap.get('id');
    this.httpClient.get("assets/ProductDetail.json").subscribe(data =>{
      this.products = data;
      console.log(this.products);
      this.product = this.products.filter(x=>x.title === this.title)[0];
      //this.product = this.products.filter(x=>x.SubProducts === this.title)[0];
      console.log(this.product);
    })
    }
}
