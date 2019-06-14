import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FileReaderService } from '@services/file-reader.service';
import { Observable, from, Subject } from 'rxjs';
import { WebcamUtil, WebcamImage } from 'ngx-webcam';
import { map } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'webcam-dialog',
  templateUrl: './webcam-dialog.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebcamDialogComponent implements OnInit {
  tookPhoto: boolean = false;

  multipleWebcams$: Observable<boolean>;
  trigger$: Subject<void> = new Subject();
  videoOptions: MediaTrackConstraints = {
    aspectRatio: 1,
    width: 480,
    height: 480,
    facingMode: 'left',
  };

  image: WebcamImage;

  constructor(private dialogRef: MatDialogRef<any>) {}

  ngOnInit() {
    this.multipleWebcams$ = from(WebcamUtil.getAvailableVideoInputs()).pipe(
      map((devices) => devices && devices.length > 1)
    );
  }

  onTakePhoto(image: WebcamImage) {
    this.tookPhoto = true;
    this.image = image;
  }

  onReset() {
    this.tookPhoto = false;
  }

  onSave() {
    this.dialogRef.close(this.image.imageAsDataUrl);
  }
}
