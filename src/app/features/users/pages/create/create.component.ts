import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import { UserInfoFormComponent } from '../../components/user-info-form/user-info-form.component';
import { UserPhotoFormComponent } from '../../components/user-photo-form/user-photo-form.component';
import { UserAddressFormComponent } from '../../components/user-address-form/user-address-form.component';
import { UserMedicalFormComponent } from '../../components/user-medical-form/user-medical-form.component';
import { Observable, Subject, from, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateComponent implements OnInit {
  @ViewChild(UserInfoFormComponent, { static: false })
  userInfo: UserInfoFormComponent;

  @ViewChild(UserPhotoFormComponent, { static: false })
  userPhoto: UserPhotoFormComponent;

  @ViewChild(UserAddressFormComponent, { static: false })
  userAddress: UserAddressFormComponent;

  @ViewChild(UserMedicalFormComponent, { static: false })
  userMedical: UserMedicalFormComponent;

  ngOnInit() {}

  get fieldsUncompleted() {
    return (
      (this.userInfo && this.userInfo.shouldDisable()) ||
      (this.userPhoto && this.userPhoto.shouldDisable()) ||
      (this.userAddress && this.userAddress.shouldDisable()) ||
      (this.userMedical && this.userMedical.shouldDisable())
    );
  }

  submit() {
    this.userInfo.submit();
    this.userPhoto.submit();
    this.userAddress.submit();
    this.userMedical.submit();
  }
}
