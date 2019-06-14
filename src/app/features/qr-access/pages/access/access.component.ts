import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';
import {
  from,
  Subscription,
  Observable,
  Subject,
  combineLatest,
  BehaviorSubject,
} from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'access',
  templateUrl: './access.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessComponent implements AfterViewInit, OnDestroy {
  @ViewChild(QrScannerComponent, { static: false }) scanner: QrScannerComponent;

  isLoading$: Subject<boolean>;
  scanned$: Subject<boolean>;
  showScanner$: Observable<boolean>;

  username: string = '';
  private videoDevice: any;

  private subscriptions: Subscription;

  constructor() {
    this.isLoading$ = new BehaviorSubject(false);
    this.scanned$ = new BehaviorSubject(false);
    this.showScanner$ = combineLatest(
      this.isLoading$.asObservable(),
      this.scanned$.asObservable()
    ).pipe(map(([loading, scanned]) => !scanned && !loading));
  }

  ngAfterViewInit() {
    this.subscriptions = this.scanner.capturedQr
      .pipe(
        tap(() => {
          this.isLoading$.next(true);
          this.scanned$.next(true);
        })
      )
      .subscribe(() => {
        this.isLoading$.next(false);
      });

    this.subscriptions.add(
      from(this.scanner.getMediaDevices()).subscribe((devices) => {
        const videoDevices = devices.filter(({ kind }) => kind == 'videoinput');
        this.videoDevice = videoDevices[0];
        this.scanner.chooseCamera.next(this.videoDevice);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onRetry() {
    this.scanned$.next(false);
    this.isLoading$.next(false);
    this.scanner.startScanning(this.videoDevice);
  }
}
