import { MatSnackBarModule, MatInputModule, MatButtonModule, MatDividerModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatSnackBarModule, MatInputModule, MatButtonModule, MatDividerModule],
  exports: [MatSnackBarModule, MatInputModule, MatButtonModule, MatDividerModule],
})
export class AngularMaterialModule { }
