import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
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
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  //subtitle:string;
  constructor(
    private httpClient: HttpClient) {
     }
    
  ngOnInit() {
    this.getProduct();
    this.galleryOptions = [
      { "width":"100%", "height": "80vh", "imageAnimation": "zoom" , "imageArrowsAutoHide": true, "thumbnailsArrowsAutoHide": true,"imageAutoPlay": true, "imageAutoPlayPauseOnHover": true, "previewAutoPlay": true, "previewAutoPlayPauseOnHover": true },
      { "breakpoint": 500, "width": "100%", "height": "50vh", "thumbnailsColumns": 3 },
      { "breakpoint": 300, "width": "100%", "height": "50vh", "thumbnailsColumns": 2 },
      ];
    this.galleryImages = [];
  }
  
  getProduct(): void {
    
    // this.subtitle=this.route.snapshot.paramMap.get('subtitle');
    // console.log(this.title);
    // console.log(this.subtitle);
    // const id = +this.route.snapshot.paramMap.get('id');
    this.httpClient.get("assets/ProductDetail.json").subscribe(data =>{
      this.products = data;
      this.product = this.products.filter(x=>x.title === "Wooden Texture")[0];
      this.galleryImages = this.product.Gallery;
    })
    }
}
