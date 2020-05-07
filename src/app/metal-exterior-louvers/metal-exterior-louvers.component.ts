import { Component, OnInit } from '@angular/core';
import {Iproduct} from '../../interfaces/product';
@Component({
  selector: 'app-metal-exterior-louvers',
  templateUrl: './metal-exterior-louvers.component.html',
  styleUrls: ['./metal-exterior-louvers.component.css']
})
export class MetalExteriorLouversComponent implements OnInit {
  products: Iproduct[] = [
    {title: 'U-Shaped Baffle Louvers',
     // tslint:disable-next-line: max-line-length
     detail: 'U-Shaped Baffle Box Louvers are an easily mounted & extremely versatile exterior cladding system. U-shaped Box is an economic but long-lasting solution for external cladding. Special unique Powder coating finish on panel is not affected by dirt and humidity. Shapes, colour, materials & technology...',
     thumbnailURL: 'assets/Thumbnails/Products/MetalExteriorLouvers/U Shaped Baffle Louvers.jpg'},
    {title: '84R / 38R Louvers',
    // tslint:disable-next-line: max-line-length
    detail: 'Linear 84R / 38R Cladding is known for its attractive and fluid lines. Panels can be easily removed and replaced by hand allowing easy and full access to services. Their effect is simple but pleasant. Linear Exterior Cladding can be fixed horizontally or vertically with multi space cladding System...',
    thumbnailURL: 'assets/Thumbnails/Products/MetalExteriorLouvers/84R - 38R Louvers.jpg'},
    {title: 'Slanted Louvers',
     // tslint:disable-next-line: max-line-length
     detail: 'Slanted Louver are highly innovative and gaining popularity in construction to cover the Ducts and used as a Ventilated facade system. The systems are easy and fast to install with variety of carriers with different louvers inclination. Panels come with a special high quality powder coating finish...',
     thumbnailURL: 'assets/Thumbnails/Products/MetalExteriorLouvers/Slanted Louvers.jpg'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
