import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  minutes = 0;
  language = 'english';
  fly = true;
  logo =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpvdaVGSQVXaKRkoDKFkb32BY37Pi6wEx_og&usqp=CAU';
  inc(i: number) {
    this.minutes = Math.min(10, Math.max(0, this.minutes + i));
  }
  french() {
    this.language = 'french';
  }
  english() {
    this.language = 'english';
  }
}
