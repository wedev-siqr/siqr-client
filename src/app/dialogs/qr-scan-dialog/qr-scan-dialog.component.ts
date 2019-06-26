import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';
import { from, Subscription } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'qr-scan-dialog',
  templateUrl: './qr-scan-dialog.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QrScanDialogComponent implements OnInit {
  @ViewChild(QrScannerComponent, { static: true }) scanner: QrScannerComponent;
  private videoDevice: any;
  private subscriptions: Subscription;

  constructor(private dialogRef: MatDialogRef<any>) {}

  ngOnInit() {
    this.subscriptions = this.scanner.capturedQr.subscribe((value) =>
      this.dialogRef.close(value)
    );

    this.subscriptions.add(
      from(this.scanner.getMediaDevices()).subscribe((devices) => {
        const videoDevices = devices.filter(({ kind }) => kind == 'videoinput');
        this.videoDevice = videoDevices[0];
        this.scanner.chooseCamera.next(this.videoDevice);
      })
    );
  }
}
