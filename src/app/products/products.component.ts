import { Component, OnInit } from '@angular/core';
import {Iproduct} from './product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Iproduct[] = [
    {title: 'Metal Exterior Louvers',
     // tslint:disable-next-line: max-line-length
     detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
     thumbnailURL: 'assets/Thumbnails/Products/Metal_Exterior_Louvers.jpg'},
    {title: 'Metal False Ceilings',
    // tslint:disable-next-line: max-line-length
    detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    thumbnailURL: 'assets/Thumbnails/Products/Metal False Ceilings.jpg'},
    {title: 'Wooden Texture',
     // tslint:disable-next-line: max-line-length
     detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
     thumbnailURL: 'assets/Thumbnails/Products/Wooden Texture.jpg'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
