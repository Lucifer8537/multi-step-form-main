import { Component } from '@angular/core';

@Component({
  selector: 'app-thank-you',
  imports: [],
  templateUrl: './thank-you.html',
  styleUrl: './thank-you.css',
})
export class ThankYou {
  title = 'Thank you!';
  message =
    'Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaiming.com.';
}
