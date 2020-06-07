import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
  FilesToDownload: any = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("assets/FilesToDownload.json").subscribe(data =>{
      console.log(data);
      this.FilesToDownload = data;
    })
  }
}
