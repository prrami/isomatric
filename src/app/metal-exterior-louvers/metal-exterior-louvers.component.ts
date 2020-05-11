import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-metal-exterior-louvers',
  templateUrl: './metal-exterior-louvers.component.html',
  styleUrls: ['./metal-exterior-louvers.component.css']
})
export class MetalExteriorLouversComponent implements OnInit {
  products: any = [];
  SubProducts: any = [];
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("assets/Products.json").subscribe(data =>{
      console.log(data);
      this.products = data;
      this.SubProducts = this.products.filter(x=>x.title === "Metal Exterior Louvers")[0].SubProducts;
    })
  }
}
