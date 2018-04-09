import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RangeComponent } from './range/range.component';
import { ListWithImageComponent } from './list-with-image/list-with-image.component';
import { ListWithTextComponent } from './list-with-text/list-with-text.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormTextareaComponent } from './form-textarea/form-textarea.component';
import { FormRadioComponent } from './form-radio/form-radio.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { FormDatepickerComponent } from './form-datepicker/form-datepicker.component';
import { FormSwitchComponent } from './form-switch/form-switch.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { UploadFileDialogComponent } from './file-upload/upload-file-dialog/upload-file-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: [
    RangeComponent,
    ListWithImageComponent,
    ListWithTextComponent,
    FormInputComponent,
    FormTextareaComponent,
    FormRadioComponent,
    FormCheckboxComponent,
    FormDatepickerComponent,
    FormSwitchComponent,
    FileUploadComponent,
    UploadFileDialogComponent
  ],
  exports: [
    RangeComponent,
    ListWithImageComponent,
    ListWithTextComponent,
    FormInputComponent,
    FormTextareaComponent,
    FormRadioComponent,
    FormCheckboxComponent,
    FormDatepickerComponent,
    FormSwitchComponent,
    FileUploadComponent
  ]
})
export class PlatformComponentsModule { }
export const PlatformComponents = [
  RangeComponent,
  ListWithImageComponent,
  ListWithTextComponent,
  FormInputComponent,
  FormTextareaComponent,
  FormRadioComponent,
  FormCheckboxComponent,
  FormDatepickerComponent,
  FormSwitchComponent
];
