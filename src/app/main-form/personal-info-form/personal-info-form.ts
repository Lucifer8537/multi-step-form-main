import { Component } from '@angular/core';
import { PersonalInfoModal } from './personal-info-modal';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-personal-info-form',
  imports: [FormsModule],
  templateUrl: './personal-info-form.html',
  styleUrl: './personal-info-form.css',
})
export class PersonalInfoForm {
  personalInfo: PersonalInfoModal = {
    name: '',
    email: '',
    phnNumber: '',
  };

  validName: boolean = true;
  validEmail: boolean = true;
  validNumber: boolean = true;

  isEmailValid(formEmail: string): boolean {
    if (formEmail === '') return false;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(formEmail);
  }

  isValidMobile(mobile: string): boolean {
    const regex = /^\+?[0-9]{10,13}$/;
    return regex.test(mobile.trim());
  }

  submit = (form: NgForm) => {
    const formValue: PersonalInfoModal = form.form.value;
    const formName = formValue.name;
    const formEmail = formValue.email;
    const formPhnNumber = formValue.phnNumber;
    this.validEmail = this.isEmailValid(formEmail);
    this.validName = formName !== '';
    this.validNumber = this.isValidMobile(formPhnNumber);
    if (this.validEmail && this.validName && this.validNumber)
      console.log('Successfully submitted');
    else console.log('Invalid property');
  };
}
