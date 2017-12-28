import {Component, OnInit} from '@angular/core';
import {UpperCaseService} from '../upper-case.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  name = 'Regular component';
  message: string;

  constructor(private upperCaseService: UpperCaseService) { }

  ngOnInit() {
    this.upperCaseService.getUpperCaseMessage()
      .subscribe((message: string) => {
      this.message = message;
      console.log(`${this.name} - ${message}`);
    });
  }
}
