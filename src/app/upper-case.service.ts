import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UpperCaseService {

  private upperCaseMessage$ = new Subject();

  constructor() { }

  toToUpperCase(value: string) {
    this.upperCaseMessage$.next(value.toUpperCase());
  }

  getUpperCaseMessage() {
    return this.upperCaseMessage$;
  }
}
