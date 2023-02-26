import { Component, Input } from '@angular/core';
import firebase from 'firebase/compat/app';
import { Post } from '../../interface/post.interface';
import { SharedService } from '../../../shared.service';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent {
  @Input() isDarkEnable = false;
  @Input() postData: Post | null = null
  constructor(private httpClient: HttpClient, private router: Router, private _sharedService: SharedService) {
    this._sharedService.darkModeStatus$.subscribe((value) => {
      this.isDarkEnable = value;
    })
  }
  logEvent() {
    firebase.analytics().logEvent('screen_view');
  }
  deletePost(id: string) {
    const password = prompt("Enter Admin password:");

    if (password === 'Admin@2023') {
      this.httpClient.delete(`https://blogapibackend.netlify.app/posts/${id}`).subscribe(()=>{
        alert('Post deleted successfully');
        this.router.navigateByUrl('/blog'); // navigate to posts page
        location.reload(); // refresh the current p
      }, () => {
        alert('Error deleting post');
      });
    } else if (password) {
      alert("Wrong password");
    } else {
      alert("You did not enter a password");
    }

  }
}
