import { NgModule, LOCALE_ID } from '@angular/core';
import {
  LabelOptions,
  MAT_LABEL_GLOBAL_OPTIONS,
  DateAdapter,
  MAT_DATE_FORMATS,
} from '@angular/material/core';
import {
  MatFormFieldDefaultOptions,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import {
  MatDialogConfig,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import {
  MatSnackBarConfig,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_FORMATS,
} from '@angular/material-moment-adapter';

const matLabelDefaultOptions: LabelOptions = {
  float: 'always',
};

const matFormFieldDefaultOptions: MatFormFieldDefaultOptions = {
  appearance: 'outline',
};

const matSnackbarDefaultOptions: MatSnackBarConfig = {
  horizontalPosition: 'right',
  verticalPosition: 'bottom',
  duration: 5000,
};

const matDialogConfig: MatDialogConfig = {
  minWidth: '400px',
  hasBackdrop: true,
  closeOnNavigation: true,
  maxWidth: '80vw',
  role: 'dialog',
};

@NgModule({
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: matSnackbarDefaultOptions,
    },
    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: matLabelDefaultOptions },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: matFormFieldDefaultOptions,
    },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: matDialogConfig },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MAT_MOMENT_DATE_FORMATS,
    },
  ],
})
export class AppProvidersModule {}
