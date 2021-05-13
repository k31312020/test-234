import { Component, Inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-address-dialog',
  templateUrl: './address-dialog.component.html',
  styleUrls: ['./address-dialog.component.scss']
})
export class AddressDialogComponent {

  //Initializing form controls and validations for two way binding
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(
    private snackbar: SnackbarService,
    public dialogRef: MatDialogRef<AddressDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  submit(flag?: boolean): void {
    if (!flag) {
      // Closing the dialog directly if cancel button is clicked
      this.dialogRef.close(flag);
    } else if (this.form.valid) {
      // If form is valid passing the form data to dialog close event
      this.dialogRef.close(this.form.value);
    } else {
      // Marking all the form fields as touched so that errors will be displayed
      this.form.markAllAsTouched();
      this.snackbar.notify('Incomplete form, please try again', 'error');
    }
  }


  // getters for referencing the form controls from dom for better performance

  get nameControl(): AbstractControl {
    return this.form.get('name');
  }

  get phoneControl(): AbstractControl {
    return this.form.get('phoneNumber');
  }

  get emailControl(): AbstractControl {
    return this.form.get('email');
  }
}
