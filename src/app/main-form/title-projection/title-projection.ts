import { Component, input } from '@angular/core';

@Component({
  selector: 'app-title-projection',
  imports: [],
  templateUrl: './title-projection.html',
  styleUrl: './title-projection.css',
})
export class TitleProjection {
  title = input.required<string>();
  sub_title = input.required<string>();
}
