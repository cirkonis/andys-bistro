import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectToolBarHidden} from "../../../store/menu.selectors";
import {SetToolBarHidden} from "../../../store/menu.actions";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
  hidden$ = this.store.select(selectToolBarHidden);

 constructor(private store: Store) {
 }
  setHidden() {
    this.store.dispatch(new SetToolBarHidden())
  }
}
