import { Directive, Input} from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[customPasswordValidator]',
  providers:[
    {
      provide: NG_VALIDATORS,
      useExisting: CustomPasswordValidatorDirective,
      multi: true
    }
  ]
})
export class CustomPasswordValidatorDirective implements Validator{

  @Input('customPasswordValidator') newPassword = ''

  validate(control: AbstractControl): {[key: string]: any}  | null {
    let confirmPassword: string = (control.value != null ? control.value : '')
    if(confirmPassword != this.newPassword && confirmPassword.length > 0){
      return {'passwordValidationFail': true}
    }
    return null;
  }

}