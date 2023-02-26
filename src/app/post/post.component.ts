import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../common/interface/post.interface';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  post:Post | null = null;
  htmlContent:SafeHtml | undefined;

  constructor(private httpClient: HttpClient, private rout:ActivatedRoute, private sanitizer: DomSanitizer){
  }
  ngOnInit(): void {
    this.httpClient.get(`https://blogapibackend.netlify.app/posts/${this.rout.snapshot.params['id']}`).subscribe(
      (data: any)=>{
        this.post = data;
        this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(data?.content);
      }
    )
  }
}
