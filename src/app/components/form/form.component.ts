import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PhoneNumbers } from 'src/app/module/dialog';
import { DialogCardComponent } from '../dialog-card/dialog-card.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  name: string = ""
  lastname: string = ""
  cpf: string = ""
  phoneNumber: string = ""
  additionalPhoneNumber: PhoneNumbers[] = []
  adress: string = ""
  complement: string = ""
  username: string = ""
  password: string = ""
  passwordConfirmation: string = ""

  addNewPhoneNumber() {
    this.additionalPhoneNumber.push({intPhoneNumber: ""})
  }

  removeNewPhoneNumber(i: number) {
    this.additionalPhoneNumber.splice(i, 1)
  }

  constructor(
    public dialog: MatDialog
  ) {}

  openDialog() {
    this.dialog.open(DialogCardComponent, {
      width: '20rem',
      data: {
        name: this.name,
        lastname: this.lastname, 
        username: this.username, 
        cpf: this.cpf, 
        phoneNumber: this.phoneNumber, 
        additionalPhoneNumber: this.additionalPhoneNumber,
        adress: this.adress, 
        complement: this.complement, 
        password: this.password
      },
    });
  }

  
}
