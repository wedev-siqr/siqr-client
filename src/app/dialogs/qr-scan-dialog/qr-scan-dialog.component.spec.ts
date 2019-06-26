import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrScanDialogComponent } from './qr-scan-dialog.component';

describe('QrScanDialogComponent', () => {
  let component: QrScanDialogComponent;
  let fixture: ComponentFixture<QrScanDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrScanDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrScanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
