import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() buttonText!: string;

  @Input() url!: string;

  constructor(private router: Router) {}

  navigate(): void {
    this.router.navigateByUrl(`${this.url}`);
  }
}
