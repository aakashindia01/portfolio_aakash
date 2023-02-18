import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
import { Post } from '../common/interface/post.interface';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogData:Post[]=[];
  isDarkEnable = false;
  constructor(private httpClient: HttpClient, private sharedService: SharedService){
  }
  ngOnInit(): void {
    this.httpClient.get("https://run.mocky.io/v3/89782f29-dd6a-4d52-a456-e7fe8f084f73").subscribe(
      (data: any)=>{
        this.blogData = data;
      }
    )
    this.isDarkEnable = this.sharedService.togleState;
    this.sharedService.darkModeStatus$.subscribe((value)=>{
      this.isDarkEnable = value;
    })
    
  }


  
}
