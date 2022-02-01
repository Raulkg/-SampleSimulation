import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PageComponent} from './../../shared/page/page.component';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { DataServiceService } from 'src/app/comm/data-service.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent extends PageComponent implements OnInit {

  anyinput = new FormControl('', [Validators.required]);
  // pattern validation for ipv4 address
  ipv4 = new FormControl('', [Validators.required,  Validators.pattern('^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$')]);
  
  
  constructor(
    public override router: Router,
    fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private dataServiceService:  DataServiceService) {
    super(router);
  }

/**
 * 
 * @returns Error Messafe for invalid entries in anyinput
 */
  getAnyInputErrorMessage() {

    if (this.anyinput.hasError('required')) {
      return 'You must enter a input value';
    }
    return '';
  }

  /**
   * 
   * @returns Error Message for invalid IPV4 Address
   */
  getErrorMessage() {
    if (this.ipv4.hasError('required')) {
      return 'You must enter a ipv4 Address';
    }
    return this.ipv4.hasError('pattern') ? 'Not a valid ipv4 Address' : '';
  }


  /**
   *  Navigates to result page based on the inputs given
   *  inputs are validated only then navigated to result page | second page 
   * @returns  
   */
  onNext() {
 
    if(this.ipv4.errors === null && null=== this.anyinput.errors) {
      this.dataServiceService.setData({input1:this.anyinput.value, ipv4: this.ipv4.value})
      this.goToPage('result');
    } else {
      this._snackBar.open('Invalid field entries, Please Verify', 'Close', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      // console.log(this.ipv4.errors)
      // console.log(this.anyinput.errors)
    }
    return true;
  }

  override ngOnInit(): void {
  }

}
