import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-metal-false-ceilings',
  templateUrl: './metal-false-ceilings.component.html',
  styleUrls: ['./metal-false-ceilings.component.css']
})
export class MetalFalseCeilingsComponent implements OnInit {
  products: any = [];
  SubProducts: any = [];
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("assets/Products.json").subscribe(data =>{
      console.log(data);
      this.products = data;
      console.log(this.products);
      this.SubProducts = this.products[1].SubProducts;
      console.log(this.SubProducts);
    })
  }

}
