import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {selectPreferences} from "../../../../../store/menu.selectors";
import {UpdatePreferences} from "../../../../../store/menu.actions";
import {IPreference} from "../../../../../interfaces/IPreference";

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {

  preferences$ = this.store.select(selectPreferences);

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  updatePreferences(preference: IPreference): void{
      this.store.dispatch(new UpdatePreferences(preference))
  }

}
