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
import { UserFormLayoutComponent } from '../../components/user-form-layout/user-form-layout.component';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateComponent implements OnInit {
  @ViewChild(UserFormLayoutComponent, { static: true })
  form: UserFormLayoutComponent;

  ngOnInit() {}
}
