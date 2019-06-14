import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentUserInfoFormComponent } from './payment-user-info-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';

const MATERIAL_MODULES = [
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
];

const COMMON_MODULES = [
  CommonModule,
  MATERIAL_MODULES,
  ReactiveFormsModule,
  FlexLayoutModule,
];

const COMMON_DECLARATIONS = [PaymentUserInfoFormComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_MODULES],
  exports: COMMON_DECLARATIONS,
})
export class PaymentUserInfoFormModule {}
