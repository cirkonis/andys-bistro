import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
})

export class AdComponent {
  @Input() imgPath!: string;

  @Input() alt!: string;

  @Input() bottomGradientColor!: string;

  @Input() url!: string;

  goToAdSite(url: string) : void {
    window.open(url, "_blank");
  }
}
