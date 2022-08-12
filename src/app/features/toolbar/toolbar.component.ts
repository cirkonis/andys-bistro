import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent implements OnInit {
  hidden: boolean;

  ngOnInit(): void {
    this.hidden = true;
  }

  setHidden() {
    this.hidden = !this.hidden
  }
}
