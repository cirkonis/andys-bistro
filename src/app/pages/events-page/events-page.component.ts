import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
})
export class EventsPageComponent {

  constructor(private router: Router) { }

  goTo(url: string) {
    this.router.navigateByUrl(url)
  }
}
