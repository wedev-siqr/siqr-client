import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DisableForm } from '@classes/disable-form';
import { Observable, Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { WebcamDialogComponent } from '../../dialogs/webcam-dialog/webcam-dialog.component';

@Component({
  selector: 'user-photo-form',
  templateUrl: './user-photo-form.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPhotoFormComponent extends DisableForm {
  validated: boolean;

  @Input() set src(photo) {
    if (photo) this.form.patchValue({ photo });
  }

  photo$: Observable<string>;

  private subscription: Subscription;

  constructor(formBuilder: FormBuilder, private matDialog: MatDialog) {
    super();
    this.form = formBuilder.group({
      photo: ['', Validators.required],
    });

    this.subscription = this.form.valueChanges.subscribe(() => {
      this.validated = false;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  submit() {
    super.submit();
    this.validated = true;
  }

  onOpenCamera() {
    this.photo$ = this.matDialog
      .open(WebcamDialogComponent)
      .afterClosed()
      .pipe(
        filter((photo) => !!photo),
        tap((photo) => {
          this.form.patchValue({ photo });
        })
      );
  }
}
