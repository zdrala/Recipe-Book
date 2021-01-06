import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  localSection='recipe';

  changeSection(section:string)
  {
    this.localSection=section;
  }
}
