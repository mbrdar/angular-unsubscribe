import {Component, OnInit} from '@angular/core';
import {UpperCaseService} from '../upper-case.service';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-async-pipe-card',
  templateUrl: './async-pipe-card.component.html',
  styleUrls: ['./async-pipe-card.component.css']
})
export class AsyncPipeCardComponent implements OnInit {
  name = 'AsyncPipe component';

  messageSubscription: Observable<string>;

  constructor(private upperCaseService: UpperCaseService) {
  }

  ngOnInit() {
    this.messageSubscription = this.upperCaseService.getUpperCaseMessage()
      .map((message: string) => {
        console.log(`${this.name} - ${message}`);
        return message;
      });
  }

}
