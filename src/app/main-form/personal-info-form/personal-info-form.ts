import { Component, OnInit } from '@angular/core';
import { PersonalInfoModal } from './personal-info-modal';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TitleProjection } from '../title-projection/title-projection';
import { MainFormService } from '../main-form.service';

@Component({
  selector: 'app-personal-info-form',
  imports: [FormsModule, TitleProjection],
  templateUrl: './personal-info-form.html',
  styleUrl: './personal-info-form.css',
})
export class PersonalInfoForm implements OnInit {
  personalInfo!: PersonalInfoModal;

  validName: boolean = true;
  validEmail: boolean = true;
  validNumber: boolean = true;
  title = 'Personal info';
  sub_title = 'Please provide your name, email address, and phone number.';

  constructor(
    private router: Router,
    private mainFormService: MainFormService
  ) {}
  ngOnInit(): void {
    this.personalInfo = this.mainFormService.getPersonalInfoForm();
  }

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
    if (this.validEmail && this.validName && this.validNumber) {
      this.mainFormService.setPersonalInfoForm(formValue);
      this.router.navigate(['/select-plan']);
    } else console.log('Invalid property');
  };
}
