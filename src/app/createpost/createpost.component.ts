import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment} from 'moment';
import { ConfirmPopupComponent } from '../common/components/confirm-popup/confirm-popup.component';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { Renderer2 } from '@angular/core';
import { forwardRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UploadService } from '../common/service/upload.service';
import { BlogCategories,  } from '../common/interface/blogCatagory.interface';

const moment = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},

    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreatepostComponent),
      multi: true
    }
  ],
})
export class CreatepostComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private renderer: Renderer2,
    public dialog: MatDialog,
    private _uploadService: UploadService
  ) {}
  blogCategories:BlogCategories[]= []
  public content = '';
  htmlData: string = '';
  name = '';
  file:any;
  percentage = 40;
  public editorConfig = {
    toolbar: [
      { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat'] },
      { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
      { name:'insert', items: ['Table']},
      { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
      { name: 'colors', items: ['TextColor', 'BGColor'] },
      { name: 'tools', items: ['Maximize', 'ShowBlocks'] },
    ]
  };
  date = new FormControl(moment().format('MM/DD/YYYY'));

  ngOnInit(): void {
    this.http.get('https://run.mocky.io/v3/2b0ee768-eb12-4174-a66a-63079a8ccf79').subscribe((blogCategories:any)=>{
      this.blogCategories = blogCategories;
    })
    
  }

  addScriptToElement(src:any){
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    this.renderer.appendChild(document.body, script);
    return script;
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(ConfirmPopupComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        this.clearCKeditor();
      }
    })
  }

  clearCKeditor(){
    this.htmlData = ''
  }

  onContentDom(event:any){
    this.blogFormFroup.get('content')?.setValue(this.htmlData);
    this.content = event.editor.editable().getText();
  }

  onReady(eventsource:any){
    eventsource.editor.document.on('keypress', (event:any)=>{
      this.content = eventsource.editor.editable().getText();
    })
  }

  onEditorChange(event:any){
    this.blogFormFroup.get('content')?.setValue(this.htmlData);
  }

  blogCategoriesControl = new FormControl<any | null>(null, Validators.required);

  blogFormFroup = new FormGroup({
    title: new FormControl(''),
    subtitle: new FormControl(''),
    auther: new FormControl(''),
    date: new FormControl(moment()),
    thumbnail: new FormControl(''),
    category: new FormControl(''),
    content: new FormControl('')
  });

  onFileSelected(event:any){
    this.file = event.target.files[0];
    this._uploadService.uploadFile(this.file);
  }

  async onSubmit() {
    const date = this.blogFormFroup.value.date?.format('MM/DD/YYYY')
    const thumbnail = await this._uploadService.downloadUrl;
    const requestBody = {
      ...this.blogFormFroup.value, date, thumbnail
    }

    this.http.post('https://blogapibackend.netlify.app/posts', requestBody).subscribe();

  }

  onControlInput() {
    if(this.myControlValue)
      this.blogFormFroup.get('auther')?.setValue(this.myControlValue);
    }
    

  get myControlValue() {
    return this.blogFormFroup?.get('auther')?.value;
  }
}
