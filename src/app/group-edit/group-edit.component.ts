import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Group} from "../group";
import {groups} from "../mock-groups";

@Component({
  selector: 'app-group-edit',
  standalone: true,
  imports: [],
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
      this.editMode = this.group != undefined
  }

  protected readonly JSON = JSON;
}
