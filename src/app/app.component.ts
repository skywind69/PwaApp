import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  // update: boolean = false;
  joke: any;
  constructor(private data: DataService){}

  // constructor(updates: SwUpdate, private data: DataService) {
  //   updates.available.subscribe(event => {

  //     //this.update = true;
  //     updates.activateUpdate().then(() => document.location.reload());

  //   })
  // }

  ngOnInit() {
    this.data.gimmeJokes().subscribe(res => {
      console.log(res);
      this.joke = res;
    })
  }
}
