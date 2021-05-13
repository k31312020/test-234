import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddressDialogComponent } from '../add-address-dialog/address-dialog.component';
import { Address } from '../models/address.model';
import { ApiService } from '../services/api.service';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit {

  // displayedColumns and dataSource are inputs for the mat-table component from angular material
  // this are the columns to be displayed
  displayedColumns: string[] = ['name', 'phone', 'email', 'delete'];


  // This class instance is where all the table data are stored
  dataSource = new MatTableDataSource<Address>();

  constructor(public dialog: MatDialog, private api: ApiService, private snackbar: SnackbarService) { }

  ngOnInit(): void {
    // This will listen to firestore address collection, will run on every CRUD action on address
    this.listenToAddresses();
  }

  listenToAddresses(): void {
    this.api.get('address').subscribe((addresses: Address[]) => {
      // when address collection is changed dataSource is updated
      this.dataSource.data = addresses;
    });
  }

  addAddress(): void {
    // Open create address dialog using MatDialog
    const dialogRef = this.dialog.open(AddressDialogComponent, {
      width: '450px'
    });

    // Handle dialog close event
    dialogRef.afterClosed().subscribe(result => {
      // Send address to API if address exist
      if (result) {
        this.api.create('address', result);
        this.snackbar.notify('Address added successfully', 'success')
      }
    });
  }

  deleteAddress(id: string): void {
    // If address id exist delete address from database
    id && this.api.delete('address', id).then(response => {
      this.snackbar.notify('Address removed success fully', 'success');
    }).catch(err => {
        this.snackbar.notify('could not delete address', 'error');
    });
  }

}
