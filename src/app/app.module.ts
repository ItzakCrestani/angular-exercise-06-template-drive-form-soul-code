import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormComponent } from './components/form/form.component';
import { DialogCardComponent } from './components/dialog-card/dialog-card.component';
import { FormsModule } from '@angular/forms';
import { CustomPasswordValidatorDirective } from './directives/password.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DialogCardComponent,
    CustomPasswordValidatorDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
