import { CreateDialogComponentComponent } from './../create-dialog-component/create-dialog-component.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-component-button-bar',
  templateUrl: './component-button-bar.component.html',
  styleUrls: ['./component-button-bar.component.scss']
})
export class ComponentButtonBarComponent implements OnInit {
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void { }

  createTreatment(): void {
    const dialogRef = this.dialog.open(CreateDialogComponentComponent);

    // dialogRef.afterClosed().subscribe({

    // })
  }

}
