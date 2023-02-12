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
  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private sharedService: SharedService){
    this.route.snapshot.data;
    console.log(this.route.snapshot)
  }
  ngOnInit(): void {
    this.httpClient.get("../../assets/data/data.json").subscribe(
      (data)=>{
        this.blogData = data;
      }
    )
    this.isDarkEnable = this.sharedService.togleState;
    console.log('dataaa23',this.isDarkEnable);
    console.log('dataaa2',this.sharedService.darkModeStatus$);
    this.sharedService.darkModeStatus$.subscribe((value)=>{
      console.log('dataaa',value)
      if(value){
        this.isDarkEnable = value;
      }else{
        this.isDarkEnable = this.sharedService.togleState;
      }
    })
    
  }


  
}
