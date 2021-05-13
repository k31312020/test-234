import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  snackBarConfig: MatSnackBarConfig = {
    horizontalPosition: 'center',
    verticalPosition: 'top',
    duration: 2000,
  };

  action: string = 'close';

  constructor(private snackbar: MatSnackBar) { }

  notify(message: string, type?: string) {
    type && (this.snackBarConfig.panelClass= ['white-text', `${type}-color`]);
    this.snackbar.open(message, this.action, this.snackBarConfig);
  }

}
