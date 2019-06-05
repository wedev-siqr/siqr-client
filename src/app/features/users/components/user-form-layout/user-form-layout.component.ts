import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { UserInfoFormComponent } from '../user-info-form/user-info-form.component';
import { UserPhotoFormComponent } from '../user-photo-form/user-photo-form.component';
import { UserAddressFormComponent } from '../user-address-form/user-address-form.component';
import { UserMedicalFormComponent } from '../user-medical-form/user-medical-form.component';

@Component({
  selector: 'user-form-layout',
  templateUrl: './user-form-layout.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormLayoutComponent implements AfterViewInit {
  @Input('readonly') isReadonly: boolean;

  @ViewChild(UserInfoFormComponent, { static: false })
  userInfo: UserInfoFormComponent;

  @ViewChild(UserPhotoFormComponent, { static: false })
  userPhoto: UserPhotoFormComponent;

  @ViewChild(UserAddressFormComponent, { static: false })
  userAddress: UserAddressFormComponent;

  @ViewChild(UserMedicalFormComponent, { static: false })
  userMedical: UserMedicalFormComponent;

  constructor() {}

  ngAfterViewInit() {
    if (this.isReadonly) {
      this.userInfo.form.disable();
      this.userPhoto.form.disable();
      this.userAddress.form.disable();
      this.userMedical.form.disable();
    }
  }
}
