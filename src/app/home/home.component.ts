import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(private route: ActivatedRoute,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.galleryOptions = [
      { "thumbnails": false ,"thumbnailsColumns": 8, "width":"100%", "height": "90vh", "imageAnimation": "zoom" , "imageArrowsAutoHide": true, "thumbnailsArrowsAutoHide": true,"imageAutoPlay": true, "imageAutoPlayPauseOnHover": true, "previewAutoPlay": true, "previewAutoPlayPauseOnHover": false },
      { "breakpoint": 500, "width": "100%", "height": "50vh", "thumbnailsColumns": 3 },
      { "breakpoint": 300, "width": "100%", "height": "50vh", "thumbnailsColumns": 2 },
      ];
    this.galleryImages = [
      {
        "big": "assets/Products/Metal False Ceilings/Z Shaped Screen/big 1.jpg",
        "medium": "assets/Products/Metal False Ceilings/Z Shaped Screen/big 1.jpg",
        "small": "assets/Products/Metal False Ceilings/Z Shaped Screen/small 1.jpg"
      },
      {
        "big": "assets/Products/Metal False Ceilings/Z Shaped Screen/big 2.jpg",
        "medium": "assets/Products/Metal False Ceilings/Z Shaped Screen/big 2.jpg",
        "small": "assets/Products/Metal False Ceilings/Z Shaped Screen/small 2.jpg"
      },
      {
        "big": "assets/Products/Metal False Ceilings/U Shaped Screen/big 1.jpg",
        "medium": "assets/Products/Metal False Ceilings/U Shaped Screen/big 1.jpg",
        "small": "assets/Products/Metal False Ceilings/U Shaped Screen/small 1.jpg"
      },
      {
        "big": "assets/Products/Metal False Ceilings/U Shaped Screen/big 2.jpg",
        "medium": "assets/Products/Metal False Ceilings/U Shaped Screen/big 2.jpg",
        "small": "assets/Products/Metal False Ceilings/U Shaped Screen/small 2.jpg"
      }
    ];
    }
}
