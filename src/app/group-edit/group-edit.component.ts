import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Group} from "../group";
import {groups} from "../mock-groups";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-group-edit',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './group-edit.component.html',
  styleUrl: './group-edit.component.css'
})
export class GroupEditComponent implements OnInit{
  id?: number
  group?: Group
  editMode: boolean = false;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.id = Number.parseInt(this.route.snapshot.paramMap.get('id')!);
    this.group = groups.find(el => el.id === this.id)!;
    const editParam = this.route.snapshot.queryParamMap.get('edit');
    if (editParam != 'false') {
      this.editMode = true;
    }
  }

  protected readonly JSON = JSON;
}
