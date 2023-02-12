import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './common/components/navbar/navbar.component';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { DarkModeToggleComponent } from './common/components/dark-mode-toggle/dark-mode-toggle.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { ServiceComponent } from './common/components/service/service.component';
import { BlogComponent } from './blog/blog.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BlogCardComponent } from './common/components/blog-card/blog-card.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { PostComponent } from './post/post.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DarkModeToggleComponent,
    FooterComponent,
    ServiceComponent,
    BlogComponent,
    BlogCardComponent,
    HomeComponent,
    PageNotFoundComponent,
    PostComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    HttpClientModule,
    NgxTypedJsModule

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
