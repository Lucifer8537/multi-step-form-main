import {
  Component,
  input,
  OnChanges,
  output,
  SimpleChanges,
} from '@angular/core';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-plan-card',
  imports: [NgOptimizedImage],
  templateUrl: './plan-card.html',
  styleUrl: './plan-card.css',
})
export class PlanCard implements OnChanges {
  img_url = input.required<string>();
  title = input.required<string>();
  price = input.required<number>();
  selected = input.required<boolean>();
  isYearly = input.required<boolean>();
  selected_card = output<string>();
  price_display = '';
  ngOnChanges(changes: SimpleChanges): void {
    this.price_display = !this.isYearly()
      ? '$' + this.price() + '/mo'
      : '$' + this.price() * 10 + '/yr';
  }

  onSelectCard = () => this.selected_card.emit(this.title());
}
