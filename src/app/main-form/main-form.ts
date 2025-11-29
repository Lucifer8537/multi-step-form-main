import { Component } from '@angular/core';
import { PersonalInfoForm } from './personal-info-form/personal-info-form';
import { Step } from './main-form.modal';

@Component({
  selector: 'app-main-form',
  imports: [PersonalInfoForm],
  templateUrl: './main-form.html',
  styleUrl: './main-form.css',
})
export class MainForm {
  traverseSteps: Step[] = [
    {
      id: 1,
      step_no: 'STEP 1',
      step_title: 'YOUR INFO',
      active: true,
    },
    {
      id: 2,
      step_no: 'STEP 2',
      step_title: 'SELECT PLAN',
      active: false,
    },
    {
      id: 3,
      step_no: 'STEP 3',
      step_title: 'ADD-ONS',
      active: false,
    },
    {
      id: 4,
      step_no: 'STEP 4',
      step_title: 'SUMMARY',
      active: false,
    },
  ];
}
