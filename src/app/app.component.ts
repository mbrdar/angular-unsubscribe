import {Component} from '@angular/core';
import {UpperCaseService} from './upper-case.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showCards = true;

  constructor(private upperCaseService: UpperCaseService) {
  }

  toUpperCase(value) {
    this.upperCaseService.toToUpperCase(value);
  }

  closeCards() {
    this.showCards = false;
  }
}
