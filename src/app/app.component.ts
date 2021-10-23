import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTest';
  url = "https://contenterra.com/";
  showHeight: Boolean = false;
  showPage(eve) {
    this.showHeight = eve;
  }
}
