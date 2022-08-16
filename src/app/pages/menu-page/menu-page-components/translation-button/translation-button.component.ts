import {Component, Input} from '@angular/core';
import {Store} from "@ngrx/store";
import {ELanguages} from "../../../../../enums/ELanguages";
import {SetMenuLanguage} from "../../../../../store/menu.actions";

@Component({
  selector: 'app-translation-button',
  templateUrl: './translation-button.component.html',
})
export class TranslationButtonComponent {
  @Input() language: ELanguages

  @Input() backgroundURL: string;

  constructor(private store: Store) { }

  setLanguage(language: ELanguages){
    this.store.dispatch(new SetMenuLanguage(language))
  }

}
