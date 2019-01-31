import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'a nada';
  hero = 'Iron Man';

  ngOnInit(){
  console.log("this is my hero: " + this.hero)
  }
}
