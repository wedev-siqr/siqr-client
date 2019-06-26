import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Membership } from '@models/memberships';
import { ClientPayload } from '@models/users';
import { combineLatest } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
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

  @Input('client') payload: ClientPayload;

  @Input() memberships: Membership[];

  @Input() isLoading: boolean;

  @Output('onSubmit') _submit: EventEmitter<any> = new EventEmitter();

  @ViewChild(UserInfoFormComponent, { static: true })
  userInfo: UserInfoFormComponent;

  @ViewChild(UserPhotoFormComponent, { static: true })
  userPhoto: UserPhotoFormComponent;

  @ViewChild(UserAddressFormComponent, { static: true })
  userAddress: UserAddressFormComponent;

  @ViewChild(UserMedicalFormComponent, { static: true })
  userMedical: UserMedicalFormComponent;

  constructor() {}

  ngOnInit() {
    if (this.isReadonly) {
      this.userInfo.form.disable();
      this.userPhoto.form.disable();
      this.userAddress.form.disable();
      this.userMedical.form.disable();
    } else {
      combineLatest(
        this.userInfo._submit,
        this.userPhoto._submit,
        this.userMedical._submit,
        this.userAddress._submit
      )
        .pipe(
          filter<[any, any, any, any]>(
            ([info, photo, medicalInfo, address]) =>
              info && photo && medicalInfo && address
          ),
          map(([info, photo, medicalInfo, address]) => {
            const { emergencyContact } = medicalInfo;
            delete medicalInfo.emergencyContact;
            return {
              info,
              photo,
              medicalInfo,
              emergencyContact,
              address,
            };
          }),
          take(1)
        )
        .subscribe((value) => this._submit.emit(value));
    }
  }

  get shouldDisable() {
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

  get client() {
    return this.payload
      ? {
          ...this.payload,
          medicalInfo: {
            ...this.payload.medicalInfo,
            emergencyContact: this.payload.emergencyContact,
          },
          client: {
            ...this.payload.client,
            membership: this.payload.membership,
          },
        }
      : null;
  }
}
