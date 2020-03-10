import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatChipsModule,
    MatTooltipModule
  ],
  exports: [
    MatCardModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatChipsModule,
    MatTooltipModule
  ]
})
export class MaterialModule { }
