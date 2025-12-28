import { Component, OnInit } from '@angular/core';
import { TitleProjection } from '../title-projection/title-projection';
import { Card } from '../main-form.modal';
import { PlanCard } from './plan-card/plan-card';
import { MainFormService } from '../main-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-plan',
  imports: [TitleProjection, PlanCard],
  templateUrl: './select-plan.html',
  styleUrl: './select-plan.css',
})
export class SelectPlan implements OnInit {
  title = 'Select your plan';
  sub_title = 'You have the option of monthly or yearly billing.';
  card_list: Card[] = [];
  isYearly = false;

  constructor(
    private mainFormService: MainFormService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.card_list = this.mainFormService.getCardList();
    this.isYearly = this.mainFormService.getIsYearly();
  }

  onSelectCard = (selectedTitle: string) => {
    console.log('selected_title : ', selectedTitle);
    this.card_list.forEach((card: Card) => {
      if (card.title === selectedTitle) card.selected = true;
      else card.selected = false;
    });
  };

  onToggle(event: Event) {
    this.isYearly = (event.target as HTMLInputElement).checked;
    console.log(this.isYearly);
  }

  goBack = () => {
    this.router.navigate(['/personal-info']);
  };

  goNext = () => {
    this.mainFormService.setCardList(this.card_list);
    this.mainFormService.setIsYearly(this.isYearly);
    this.router.navigate(['/add-ons']);
  };
}
