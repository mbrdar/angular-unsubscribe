import {Component, OnDestroy, OnInit} from '@angular/core';
import {UpperCaseService} from '../upper-case.service';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-take-until-card',
  templateUrl: './take-until-card.component.html',
  styleUrls: ['./take-until-card.component.css']
})
export class TakeUntilCardComponent implements OnInit, OnDestroy {
  name = 'TakeUntil component';
  message: string;

  private unsubscribe$ = new Subject();

  constructor(private upperCaseService: UpperCaseService) {
  }

  ngOnInit() {
    this.upperCaseService.getUpperCaseMessage()
      .takeUntil(this.unsubscribe$)
      .subscribe((message: string) => {
        this.message = message;
        console.log(`${this.name} - ${message}`);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
