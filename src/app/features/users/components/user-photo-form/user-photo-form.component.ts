import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DisableForm } from '@classes/disable-form';
import { FileReaderService } from '@services/file-reader.service';
import { Subscription, fromEvent, Observable } from 'rxjs';
import { switchMap, mapTo, filter, tap, map } from 'rxjs/operators';

@Component({
  selector: 'user-photo-form',
  templateUrl: './user-photo-form.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPhotoFormComponent extends DisableForm implements OnInit {
  @ViewChild('fileInput', { read: ElementRef, static: false })
  fileInput: ElementRef;

  validated: boolean;

  photo$: Observable<string | ArrayBuffer>;

  private subscription: Subscription;

  constructor(
    private fileReaderService: FileReaderService,
    formBuilder: FormBuilder
  ) {
    super();
    this.form = formBuilder.group({
      photo: ['', Validators.required],
    });

    this.subscription = this.form.valueChanges.subscribe(() => {
      this.validated = false;
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.photo$ = fromEvent(this.fileInput.nativeElement, 'input').pipe(
      map(() => this.fileInput.nativeElement.files[0]),
      filter((file) => !!file),
      switchMap((file) => this.fileReaderService.toBase64(file)),
      tap((photo) => this.form.patchValue({ photo }))
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  submit() {
    super.submit();
    this.validated = true;
  }

  onOpenCamera() {
    this.fileInput.nativeElement.click();
  }
}
