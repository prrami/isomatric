import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
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
  items: GalleryItem[];
  imageData: any=[];
  //subtitle:string;
  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    public gallery: Gallery,
    public lightbox: Lightbox) {
     }
    
  ngOnInit() {
    /** Basic Gallery Example */

    // Creat gallery items
    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));


    /** Lightbox Example */

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
    this.getProduct();
  }
  
  getProduct(): void {
    this.title=this.route.snapshot.paramMap.get('title');
    this.httpClient.get("assets/ProductDetail.json").subscribe(data =>{
      this.products = data;
      console.log(this.products);
      this.product = this.products.filter(x=>x.title === "Wooden Texture")[0];
      console.log(this.product);
      this.imageData = this.product.Gallery;
      console.log(this.imageData);
    })
    }
}
