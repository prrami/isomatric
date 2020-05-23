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
      this.SubProducts = this.products.filter(x=>x.title === "Metal False Ceilings")[0].SubProducts;
      console.log(this.SubProducts);
    })
  }

}
