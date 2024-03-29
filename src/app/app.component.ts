import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  randomText = lorem.sentence();
  enteredText = '';


  onInput(value: string) {
      this.enteredText = value;
  }

}
