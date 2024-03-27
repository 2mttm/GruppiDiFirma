import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Group} from "../group";
import {Function} from "../function"
import {groups} from "../mock-groups";
import {switchMap} from "rxjs";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatIconButton} from "@angular/material/button";
import {MatTableModule} from '@angular/material/table';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {functions} from "../mock-functions";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-group-edit',
  standalone: true,
  imports: [
    RouterLink,
    MatLabel,
    MatFormField,
    MatInput,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    FormsModule,
    MatIconButton,
    MatCardSubtitle,
    MatTable,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    NgIf
  ],
  templateUrl: './group-edit.component.html',
  styleUrl: './group-edit.component.css'
})
export class GroupEditComponent implements OnInit{
  id?: number
  group: Group = new Group()
  editMode: boolean = false;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.id = Number.parseInt(this.route.snapshot.paramMap.get('id')!);
    this.group = groups.find(el => el.id === this.id)!;
    const editParam = this.route.snapshot.queryParamMap.get('edit');
    if (editParam != null && editParam != 'false') {
      this.editMode = true;
    }
  }

  protected readonly JSON = JSON;
  maxUsers: number = 3;
  columnsToDisplay: string[] = ['service', 'min', 'max'];
  dataSource: Function[] = functions;
}
