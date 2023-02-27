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
  loading = true
  constructor(private httpClient: HttpClient, private sharedService: SharedService){
  }
  ngOnInit(): void {
    const options = {
      withCredentials: true
    };
    
    this.httpClient.get("https://blogapibackend.netlify.app/posts").subscribe(
      (data: any)=>{
        this.blogData = data;
        this.loading = false;
      }
    )
    this.isDarkEnable = this.sharedService.togleState;
    this.sharedService.darkModeStatus$.subscribe((value)=>{
      this.isDarkEnable = value;
    })
    
  }


  
}
