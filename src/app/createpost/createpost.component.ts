import { Component, ViewChild } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment} from 'moment';
import { ConfirmPopupComponent } from '../common/components/confirm-popup/confirm-popup.component';
import { CKEditorComponent } from 'ng2-ckeditor';

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
  ],
})
export class CreatepostComponent {
  //@ViewChild('editor') editor: CKEditorComponent;

  constructor(public dialog: MatDialog) {}
  public content = '';
  htmlData: string = '';
  name = '';
  public editorConfig = {
    toolbar: [
      { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat'] },
      { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl'] },
      { name: 'links', items: ['Link', 'Unlink', 'Anchor'] },
      { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
      { name: 'colors', items: ['TextColor', 'BGColor'] },
      { name: 'tools', items: ['Maximize', 'ShowBlocks'] },
    ]
  };
  
  date = new FormControl(moment());

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ConfirmPopupComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  onContentDom(event:any){
    this.content = CKEDITOR.dom.element.createFromHtml(this.htmlData).getText();
  }

  onChange(event:any){
    this.content = CKEDITOR.dom.element.createFromHtml(this.htmlData).getText();
  }

  blogCategoriesControl = new FormControl<any | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  blogCategories = [
    { key: 'Personal Development', value: 'personal-development' },
    { key: 'Health and Wellness', value: 'health-and-wellness' },
    { key: 'Food and Cooking', value: 'food-and-cooking' },
    { key: 'Travel and Adventure', value: 'travel-and-adventure' },
    { key: 'Fashion and Beauty', value: 'fashion-and-beauty' },
    { key: 'Technology and Gadgets', value: 'technology-and-gadgets' },
    { key: 'Business and Entrepreneurship', value: 'business-and-entrepreneurship' },
    { key: 'Finance and Investing', value: 'finance-and-investing' },
    { key: 'Education and Learning', value: 'education-and-learning' },
    { key: 'Sports and Fitness', value: 'sports-and-fitness' },
    { key: 'Entertainment and Pop Culture', value: 'entertainment-and-pop-culture' },
    { key: 'News and Current Events', value: 'news-and-current-events' },
    { key: 'Relationships and Dating', value: 'relationships-and-dating' },
    { key: 'Parenting and Family', value: 'parenting-and-family' },
    { key: 'DIY and Home Improvement', value: 'diy-and-home-improvement' },
    { key: 'Environment and Sustainability', value: 'environment-and-sustainability' },
    { key: 'Science and Technology', value: 'science-and-technology' },
    { key: 'Art and Culture', value: 'art-and-culture' },
    { key: 'Literature and Writing', value: 'literature-and-writing' },
    { key: 'Philosophy and Spirituality', value: 'philosophy-and-spirituality' }
  ];
}
