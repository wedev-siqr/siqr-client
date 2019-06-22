import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'delete-user-dialog',
  templateUrl: './delete-user-dialog.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteUserDialogComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<any>) {}

  ngOnInit() {}

  onCancel() {
    this.dialogRef.close();
  }

  onDelete() {
    this.dialogRef.close(true);
  }
}
