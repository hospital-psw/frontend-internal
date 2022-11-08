import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';
<<<<<<< HEAD
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
=======
import { MatExpansionModule } from '@angular/material/expansion'
import {MatDialogModule} from '@angular/material/dialog'
>>>>>>> 74a2ecb (Implemented UI for showing requests and modal dialog for request rejection)

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatChipsModule,
    MatChipsModule,
    MatExpansionModule,
<<<<<<< HEAD
    MatDialogModule,
=======
    MatDialogModule
>>>>>>> 74a2ecb (Implemented UI for showing requests and modal dialog for request rejection)
  ],
  exports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatChipsModule,
    MatExpansionModule,
<<<<<<< HEAD
    MatDialogModule,
=======
    MatDialogModule
>>>>>>> 74a2ecb (Implemented UI for showing requests and modal dialog for request rejection)
  ],
})
export class MaterialModule {}
