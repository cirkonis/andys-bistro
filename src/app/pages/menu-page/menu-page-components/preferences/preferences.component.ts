import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {selectPreferences} from "../../../../../store/menu.selectors";
import {UpdatePreferences} from "../../../../../store/menu.actions";
import {IInedibleFlag} from "../../../../../interfaces/IInedibleFlag";
import {EInedibleFlagTypes} from "../../../../../enums/EInedibleFlagTypes";

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {
  preferenceTypes = EInedibleFlagTypes;

  preferences$ = this.store.select(selectPreferences);

  hidden: boolean;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.hidden = true;
  }

  updatePreferences(preference: IInedibleFlag): void{
      this.store.dispatch(new UpdatePreferences(preference))
  }

  setHidden(): void{
    this.hidden = !this.hidden;
  }

}
