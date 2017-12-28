import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { UnsubscribeCardComponent } from './unsubscribe-card/unsubscribe-card.component';
import {UpperCaseService} from './upper-case.service';
import { TakeUntilCardComponent } from './take-until-card/take-until-card.component';
import { AsyncPipeCardComponent } from './async-pipe-card/async-pipe-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    UnsubscribeCardComponent,
    TakeUntilCardComponent,
    AsyncPipeCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UpperCaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
