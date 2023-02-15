import { Component, Input } from '@angular/core';
import firebase from 'firebase/compat/app';
@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent {
  @Input() isDarkEnable = false;
  constructor() {}
  logEvent() {
    firebase.analytics().logEvent('screen_view');
  }
}
