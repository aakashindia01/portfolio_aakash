import { Component, Input } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {

  }


  isDark = false;
  darkModeEnable(event:boolean){
    this.sharedService.darkModeStatus(event);
  }
}
