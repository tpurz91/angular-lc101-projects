import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-NIGHTMARE';
  name: string = "Tim Pursley";
  itemsList: string[] = ["item1", "item2", "item3", "item4"];

  rectangle = {
    length: 10,
    width: 8,
    area: function () {
      return this.length * this.width;
    }
  }
}
