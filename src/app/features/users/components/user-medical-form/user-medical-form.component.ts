import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { DisableForm } from '@classes/disable-form';
import { FormBuilder, Validators } from '@angular/forms';
import { NAME_REGEX, PHONE_REGEX } from '@constants';
import { ClientMedicalInfo } from '@models/users';

@Component({
  selector: 'user-medical-form',
  templateUrl: './user-medical-form.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserMedicalFormComponent extends DisableForm implements OnInit {
  @Input() set medicalData(medicalData: ClientMedicalInfo) {
    if (!medicalData) return;

    this.form.patchValue({
      ...medicalData,
      bloodType: medicalData.bloodType.trim(),
      affiliationName: medicalData.affiliation,
    });
  }

  constructor(formBuilder: FormBuilder) {
    super();
    this.form = formBuilder.group({
      affiliation: ['', Validators.required],
      affiliationName: [''],
      bloodType: ['', Validators.required],
      rh: ['', Validators.required],
      alergies: [''],
      diseases: [''],
      emergencyContact: formBuilder.group({
        name: ['', [Validators.required, Validators.pattern(NAME_REGEX)]],
        firstSurname: [
          '',
          [Validators.required, Validators.pattern(NAME_REGEX)],
        ],
        secondSurname: [
          '',
          [Validators.required, Validators.pattern(NAME_REGEX)],
        ],
        phone: ['', [Validators.required, Validators.pattern(PHONE_REGEX)]],
      }),
    });

    const affiliationName = this.form.get('affiliationName');

    this.form.get('affiliation').valueChanges.subscribe((value) => {
      if (value == 'other') affiliationName.setValidators(Validators.required);
      else affiliationName.clearValidators();
      affiliationName.updateValueAndValidity();
    });
  }

  ngOnInit() {}

  get affiliationPreviewControlName() {
    return this.form.value.affiliationName != 'OTHER'
      ? 'affiliation'
      : 'affiliationName';
  }
}
