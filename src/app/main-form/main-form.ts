import { Component, OnInit } from '@angular/core';
import { PersonalInfoForm } from './personal-info-form/personal-info-form';
import { Step } from './main-form.modal';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-main-form',
  imports: [RouterOutlet],
  templateUrl: './main-form.html',
  styleUrl: './main-form.css',
})
export class MainForm implements OnInit {
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

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.traverseSteps.forEach((step) => (step.active = false));
        switch (event.urlAfterRedirects) {
          case '/personal-info':
            this.traverseSteps[0].active = true;
            break;
          case '/select-plan':
            this.traverseSteps[1].active = true;
            break;
          case '/add-ons':
            this.traverseSteps[2].active = true;
            break;
          default:
            this.traverseSteps[3].active = true;
            break;
        }
      });
  }
}
