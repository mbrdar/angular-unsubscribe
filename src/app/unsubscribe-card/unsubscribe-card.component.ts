import {Component, OnDestroy, OnInit} from '@angular/core';
import {UpperCaseService} from '../upper-case.service';
import 'rxjs/add/operator/takeUntil';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-unsubscribe-card',
  templateUrl: './unsubscribe-card.component.html',
  styleUrls: ['./unsubscribe-card.component.css']
})
export class UnsubscribeCardComponent implements OnInit, OnDestroy {
  name = 'Unsubscribe component';
  message: string;

  subscription: Subscription;

  constructor(private upperCaseService: UpperCaseService) {
  }

  ngOnInit() {
    this.subscription = this.upperCaseService.getUpperCaseMessage()
      .subscribe((message: string) => {
      this.message = message;
      console.log(`${this.name} - ${message}`);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
