import { Component, Input } from '@angular/core';
import firebase from 'firebase/compat/app';
import { Post } from '../../interface/post.interface';
@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent {
  @Input() isDarkEnable = false;
  @Input() postData:Post ={
    id: 1,
    title: 'title',
    subtitle: 'subtitle',
    phone: 'phone',
    author: 'aakash',
    date_published: '17-02-2023',
    path: '',
    thumbnail: 'https://example.com/blog/1/thumbnail.jpg',
    intro: 'intro'
  };
  constructor() {}
  logEvent() {
    firebase.analytics().logEvent('screen_view');
  }
}
