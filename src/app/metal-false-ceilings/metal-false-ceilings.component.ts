import { Component, OnInit } from '@angular/core';
import {Iproduct} from '../../interfaces/product';
@Component({
  selector: 'app-metal-false-ceilings',
  templateUrl: './metal-false-ceilings.component.html',
  styleUrls: ['./metal-false-ceilings.component.css']
})
export class MetalFalseCeilingsComponent implements OnInit {
  products: Iproduct[] = [
    {title: 'Linear 150F',
     // tslint:disable-next-line: max-line-length
     detail: '150F, specially designed arrangement make the Ceiling completely interlocked and air tight for a smooth look & uninterrupted appearance, which are able to withstand extreme wind pressure...',
     thumbnailURL: 'assets/Thumbnails/Products/MetalFalseCeilings/Linear 150F.jpg'},
    {title: 'Linear 84R / 184 R',
    // tslint:disable-next-line: max-line-length
    detail: 'Linear 84R / 184R Ceiling is known for its attractive and fluid lines.The spaces between the panels may be left open for acoustical or air movement requirements,...',
    thumbnailURL: 'assets/Thumbnails/Products/MetalFalseCeilings/Linear 84R - 184R.jpg'},
    {title: 'Linear 84C / 184 C',
     // tslint:disable-next-line: max-line-length
     detail: 'Linear 84C / 184C has been used extensively on exterior and interior applications and gives designers options for visual design continuity. Panels are clipped into the concealed suspension system...',
     thumbnailURL: 'assets/Thumbnails/Products/MetalFalseCeilings/Linear 84C - 184C.jpg'},
     {title: 'Z-Shaped Screen',
     // tslint:disable-next-line: max-line-length
     detail: 'Z-Shaped Open Screen ceiling profiles that are hung vertically from the suspension to form an open screen linear perspective interior ceilings.It can be seen that Z-Shaped system offers...',
     thumbnailURL: 'assets/Thumbnails/Products/MetalFalseCeilings/Z Shaped Screen.jpg'},
    {title: 'U-Shaped Screen',
    // tslint:disable-next-line: max-line-length
    detail: 'U-Shaped Baffle ceiling are an easily mounted and extremely versatile system.U-shaped Box is an economic but long-lasting solution for false ceiling.Special unique Powder coating finish...',
    thumbnailURL: 'assets/Thumbnails/Products/MetalFalseCeilings/U Shaped Screen.jpg'},
    {title: 'Clip-In Tile',
     // tslint:disable-next-line: max-line-length
     detail: 'Clip-In concealed panels provide durable & monolithic ceilings for interior & can be used in external conditions where the False Ceiling is not directly exposed to rainfall. Clip-In panels are available in a variety...',
     thumbnailURL: 'assets/Thumbnails/Products/MetalFalseCeilings/Clip In Tile.jpg'},
     {title: 'Lay-In Tile',
     // tslint:disable-next-line: max-line-length
     detail: 'Lay-In tile is most popular bearing system to realize false ceilings with visible 24 mm, 15 mm & Silhouette / center black T grid. Panels are durable and versatile. Lay-In tiles are available in a wide variety of...',
     thumbnailURL: 'assets/Thumbnails/Products/MetalFalseCeilings/Lay In Tile.jpg'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
