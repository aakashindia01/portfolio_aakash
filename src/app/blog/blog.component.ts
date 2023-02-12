import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogData:any;
  isDarkEnable = false;
  constructor(private httpClient: HttpClient, private sharedService: SharedService){
  }
  ngOnInit(): void {
    this.httpClient.get("../../assets/data/data.json").subscribe(
      (data)=>{
        this.blogData = data;
      }
    )
    this.isDarkEnable = this.sharedService.togleState;
    this.sharedService.darkModeStatus$.subscribe((value)=>{
      if(value){
        this.isDarkEnable = value;
      }
    })
    
  }


  
}
