import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './common/components/navbar/navbar.component';

import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { DarkModeToggleComponent } from './common/components/dark-mode-toggle/dark-mode-toggle.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { ServiceComponent } from './common/components/service/service.component';
import { BlogComponent } from './blog/blog.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu'

import { BlogCardComponent } from './common/components/blog-card/blog-card.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { PostComponent } from './post/post.component';
import {MatDialogModule} from '@angular/material/dialog';

import firebase from 'firebase/compat/app';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { CreatepostComponent } from './createpost/createpost.component';
import { ConfirmPopupComponent } from './common/components/confirm-popup/confirm-popup.component';


const firebaseConfig = {
  apiKey: "AIzaSyCh4nTJnD566ezRnemDfdN1DikFm9rxFF8",
  authDomain: "aakashindia.firebaseapp.com",
  projectId: "aakashindia",
  storageBucket: "aakashindia.appspot.com",
  messagingSenderId: "1083575592229",
  appId: "1:1083575592229:web:e3d28112dac11859a626cc",
  measurementId: "G-ENRPHC1HQF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


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
    PostComponent,
    CreatepostComponent,
    ConfirmPopupComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    MatDialogModule,
    HttpClientModule,
    NgxTypedJsModule,
    CKEditorModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSelectModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule

  ],
  providers: [
  ],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
