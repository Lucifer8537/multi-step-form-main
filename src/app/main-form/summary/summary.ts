import { Component, OnInit } from '@angular/core';
import { TitleProjection } from '../title-projection/title-projection';
import { MainFormService } from '../main-form.service';
import { AddOn, Card } from '../main-form.modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  imports: [TitleProjection],
  templateUrl: './summary.html',
  styleUrl: './summary.css',
})
export class Summary implements OnInit {
  title = 'Finishing up';
  sub_title = 'Double-check everything looks OK before confirming.';
  selected_plan!: Card;
  is_yearly = false;
  selected_add_on: AddOn[] = [];
  selected_plan_title = '';
  selected_plan_cost = '';
  total_cost = 0;
  display_total_cost = '';
  constructor(
    private mainFormService: MainFormService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.selected_plan = this.mainFormService.getSelectedPlan()!;
    this.is_yearly = this.mainFormService.getIsYearly();
    this.selected_add_on = this.mainFormService.getSelectedAddOns();
    this.selected_plan_title = this.is_yearly
      ? this.selected_plan.title + ' (Yearly)'
      : this.selected_plan.title + ' (Monthly)';
    this.selected_plan_cost = this.is_yearly
      ? '$' + this.selected_plan.cost * 10 + '/yr'
      : '$' + this.selected_plan.cost + '/mo';
    this.total_cost += this.selected_plan.cost;
    this.selected_add_on.forEach((add_on) => {
      this.total_cost += add_on.price;
    });
    this.display_total_cost = this.is_yearly
      ? '+$' + this.total_cost * 10 + '/yr'
      : '+$' + this.total_cost + '/mo';
  }

  goBack = () => this.router.navigate(['/add-ons']);

  goNext = () => this.router.navigate(['/thank-you']);

  navigatePlan() = () => this.router.navigate(['/select-plan']);
}
