import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressDialogComponent } from './add-address-dialog/address-dialog.component';


// configuration for firebase api, for demo purposes only, please go to readme for more information
const config = {
  apiKey: "AIzaSyAM50fNcKlXf8yfXa_Pz3ACN3r36dQFyNU",
  authDomain: "fir-67e4f.firebaseapp.com",
  projectId: "fir-67e4f",
  storageBucket: "fir-67e4f.appspot.com",
  messagingSenderId: "246694125034",
  appId: "1:246694125034:web:50bfc1821ca5d3efdea693",
  measurementId: "G-3DS9XB13ZM"
};

@NgModule({
  declarations: [
    AppComponent,
    AddressListComponent,
    AddressDialogComponent
  ],
  imports: [
    AngularFireModule.initializeApp(config),
    // This module is for app routing configuration
    AppRoutingModule,
    // This module is for using reactive forms in address create dialog
    ReactiveFormsModule,
    // These module are required for using angular material
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
