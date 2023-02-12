import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  togleState = false;
  private messageSource = new Subject<any>();
  darkModeStatus$ = this.messageSource.asObservable();
  constructor() { 
    const value  = localStorage.getItem('dark-mode') as string;
    this.togleState = JSON.parse(value).darkMode;
    this.messageSource.next(this.togleState);
  }
  
  
  darkModeStatus(value: boolean) {
    this.messageSource.next(value);
  }
}
