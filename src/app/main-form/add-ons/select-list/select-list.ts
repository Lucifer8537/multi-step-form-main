import { Component, input, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-select-list',
  imports: [],
  templateUrl: './select-list.html',
  styleUrl: './select-list.css',
})
export class SelectList implements OnInit {
  checked = input.required<boolean>();
  title = input.required<string>();
  description = input.required<string>();
  price = input.required<number>();
  is_yearly = input.required<boolean>();
  price_display = '';
  title_selected = output<string>();
  ngOnInit(): void {
    this.price_display = this.is_yearly()
      ? '+$' + this.price() * 10 + '/yr'
      : '+$' + this.price() + '/mo';
  }

  onSelChange = () => {
    this.title_selected.emit(this.title());
  };
}
