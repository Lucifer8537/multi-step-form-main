import { Routes } from '@angular/router';
import { PersonalInfoForm } from './main-form/personal-info-form/personal-info-form';
import { SelectPlan } from './main-form/select-plan/select-plan';
import { AddOns } from './main-form/add-ons/add-ons';
import { Summary } from './main-form/summary/summary';
import { ThankYou } from './main-form/thank-you/thank-you';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'personal-info',
    pathMatch: 'full',
  },
  {
    path: 'personal-info',
    component: PersonalInfoForm,
  },
  {
    path: 'select-plan',
    component: SelectPlan,
  },
  {
    path: 'add-ons',
    component: AddOns,
  },
  {
    path: 'summary',
    component: Summary,
  },
  {
    path: 'thank-you',
    component: ThankYou,
  },
];
