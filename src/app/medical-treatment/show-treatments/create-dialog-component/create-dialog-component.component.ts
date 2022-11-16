import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-dialog-component',
  templateUrl: './create-dialog-component.component.html',
  styleUrls: ['./create-dialog-component.component.scss']
})
export class CreateDialogComponentComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<CreateDialogComponentComponent>
  ) { }

  ngOnInit(): void {
  }

}
