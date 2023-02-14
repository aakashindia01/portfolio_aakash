import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import firebase from 'firebase/compat/app';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  togleState = false;
  activeTab = 'home';
  tooltipCommongSoon = '';
  @Output() isDarkMode = new EventEmitter<boolean>();
  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {
    const value  = localStorage.getItem('dark-mode') as string;
    this.togleState = JSON.parse(value).darkMode
    this.tooltipCommongSoon = "Stay tuned! New feature coming soon to enhance your experience. Our team is hard at work. Keep enjoying all we offer in the meantime";
  }

  onToggle(event:MatSlideToggleChange): void {
    this.darkModeService.toggle();
    this.isDarkMode.emit(event.checked);
  }

  logEvent() {
    firebase.analytics().logEvent('begin_checkout');
    firebase.setLogLevel('verbose');
  }
}
