import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserAddressFormComponent } from '../user-address-form/user-address-form.component';
import { UserInfoFormComponent } from '../user-info-form/user-info-form.component';
import { UserMedicalFormComponent } from '../user-medical-form/user-medical-form.component';
import { UserPhotoFormComponent } from '../user-photo-form/user-photo-form.component';

@Component({
  selector: 'user-form-layout',
  templateUrl: './user-form-layout.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormLayoutComponent implements OnInit {
  @Input('readonly') isReadonly: boolean;

  @ViewChild(UserInfoFormComponent, { static: true })
  userInfo: UserInfoFormComponent;

  @ViewChild(UserPhotoFormComponent, { static: true })
  userPhoto: UserPhotoFormComponent;

  @ViewChild(UserAddressFormComponent, { static: true })
  userAddress: UserAddressFormComponent;

  @ViewChild(UserMedicalFormComponent, { static: true })
  userMedical: UserMedicalFormComponent;

  form: FormGroup;

  @Output('onSubmit') _submit: Observable<any>;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      info: '',
      photo: '',
      medicalInfo: '',
      address: '',
    });
  }

  ngOnInit() {
    this._submit = combineLatest(
      this.userInfo._submit,
      this.userPhoto._submit,
      this.userMedical._submit,
      this.userAddress._submit
    ).pipe(
      map(([info, photo, medicalInfo, address]) => ({
        info,
        photo,
        medicalInfo,
        address,
      }))
    );

    if (this.isReadonly) {
      this.userInfo.form.disable();
      this.userPhoto.form.disable();
      this.userAddress.form.disable();
      this.userMedical.form.disable();
    }
  }

  get invalid() {
    return (
      this.userInfo.shouldDisable() ||
      this.userPhoto.shouldDisable() ||
      this.userAddress.shouldDisable() ||
      this.userMedical.shouldDisable()
    );
  }

  submit() {
    this.userInfo.submit();
    this.userPhoto.submit();
    this.userAddress.submit();
    this.userMedical.submit();
  }
}
