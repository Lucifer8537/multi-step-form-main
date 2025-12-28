import { Component, OnInit, signal } from '@angular/core';
import { TitleProjection } from '../title-projection/title-projection';
import { SelectList } from './select-list/select-list';
import { AddOn } from '../main-form.modal';
import { MainFormService } from '../main-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ons',
  imports: [TitleProjection, SelectList],
  templateUrl: './add-ons.html',
  styleUrl: './add-ons.css',
})
export class AddOns implements OnInit {
  title = 'Pick add-ons';
  sub_title = 'Add-ons help enhance your gaming experience.';
  add_ons = signal<AddOn[]>([]);
  is_yearly = false;
  constructor(
    private mainFormService: MainFormService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.add_ons.set(this.mainFormService.getAddOns());
    this.is_yearly = this.mainFormService.getIsYearly();
  }
  onSelection = (title: string) => {
    this.add_ons.update((add_ons) =>
      add_ons.map((add_on) =>
        add_on.title === title
          ? { ...add_on, checked: !add_on.checked }
          : add_on
      )
    );
  };

  goBack = () => {
    this.router.navigate(['/select-plan']);
  };

  goNext = () => {
    this.mainFormService.setAddOns(this.add_ons());
    this.router.navigate(['/summary']);
  };
}
