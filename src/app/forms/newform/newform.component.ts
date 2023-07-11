import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, RequiredValidator, FormControl } from '@angular/forms';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css'],
  providers: []
})
export class NewformComponent implements OnInit {
  checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['']
    });
  }

  onSubmit(value) {
    console.log(this.checkoutForm.value);


  }
}



import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, } from '@angular/forms';

@Directive({
  selector: '[validatorName][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: IdentityRevealedValidatorDirective, multi: true }
  ]
})

export class IdentityRevealedValidatorDirective implements Validator {
  validate(c: FormControl): { [key: string]: any } {
    let valid = false;
    if (valid) {
      return null;
    }

    return {
      validatorName: {
        valid: false
      }
    };
  }
}


//import { Directive } from '@angular/core';

@Directive({
  selector: 'app-Name',
})
export class forbiddenNameValidator { }
