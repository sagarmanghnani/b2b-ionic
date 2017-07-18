import {  FormGroup} from '@angular/forms';


export function greater(maximum: number, minimum: number) {
  return (group: FormGroup): {[key: string]: any} => {
    let maxRange = group.controls[maximum];
    let minRange = group.controls[minimum];
    
    if (maxRange.value <= minRange.value) {
      return {
        mismatchedPasswords: 1
      };
    }
  }
}