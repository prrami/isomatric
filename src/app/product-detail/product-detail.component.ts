import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit{
  products: any = [];
  product: any;
  title:string;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  //subtitle:string;
  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient) {
     }
    
  ngOnInit() {
    debugger;
    this.getProduct();
    debugger;
    this.galleryOptions = [
      { "width":"100%", "height": "80vh", "imageAnimation": "zoom" , "imageArrowsAutoHide": true, "thumbnailsArrowsAutoHide": true,"imageAutoPlay": true, "imageAutoPlayPauseOnHover": true, "previewAutoPlay": true, "previewAutoPlayPauseOnHover": true },
      { "breakpoint": 500, "width": "100%", "height": "50vh", "thumbnailsColumns": 3 },
      { "breakpoint": 300, "width": "100%", "height": "50vh", "thumbnailsColumns": 2 },
      ];
      debugger;
  this.galleryImages = [];
  

  debugger;
  // [
  //     {
  //       small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-small.jpeg',
  //       medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-medium.jpeg',
  //       big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-big.jpeg'
  //     },
  //     {
  //       small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-small.jpeg',
  //       medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-medium.jpeg',
  //       big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-big.jpeg'
  //     },
  //     {
  //       small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-small.jpeg',
  //       medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-medium.jpeg',
  //       big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-big.jpeg'
  //     },
  //     {
  //       small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-small.jpeg',
  //       medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-medium.jpeg',
  //       big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-big.jpeg'
  //     },
  //     {
  //       small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-small.jpeg',
  //       medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-medium.jpeg',
  //       big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-big.jpeg'
  //     }      
  // ];
  }
  
  
  getProduct(): void {
    this.title=this.route.snapshot.paramMap.get('title');
    // this.subtitle=this.route.snapshot.paramMap.get('subtitle');
    // console.log(this.title);
    // console.log(this.subtitle);
    // const id = +this.route.snapshot.paramMap.get('id');
    this.httpClient.get("assets/ProductDetail.json").subscribe(data =>{
        debugger;
        this.products = data;
        this.product = this.products.filter(x=>x.title === this.title)[0];
        debugger;
        this.galleryImages = this.product.Gallery;
      })
    }
}
