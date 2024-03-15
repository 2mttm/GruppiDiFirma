import { Routes } from '@angular/router';
import {GroupEditComponent} from "./group-edit/group-edit.component";
import {GroupListComponent} from "./group-list/group-list.component";

export const routes: Routes = [
  {path: '', component: GroupListComponent, pathMatch: 'full'},
  {path: 'create', component: GroupEditComponent},
  {path: ':id', component: GroupEditComponent}
];
