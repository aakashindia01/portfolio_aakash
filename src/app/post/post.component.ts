import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  blog1:any;


  constructor(private httpClient: HttpClient, private sharedService: SharedService, private rout:ActivatedRoute){
  }
  ngOnInit(): void {
    this.httpClient.get("../../assets/data/data.json").subscribe(
      (data: any)=>{
        this.blog1 = data[0];
      }
    )
  }
}
