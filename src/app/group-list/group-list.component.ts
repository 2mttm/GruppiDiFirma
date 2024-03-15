import {AfterViewInit, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {
  MatCard, MatCardActions,
  MatCardAvatar,
  MatCardContent, MatCardFooter,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {groups} from "../mock-groups";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton, MatFabButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatTable} from "@angular/material/table";
import {filter} from "rxjs";
import {Group} from "../group";
import {MatFormField} from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-group-list',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardTitle,
    NgForOf,
    NgIf,
    FormsModule,
    MatIconButton,
    MatIcon,
    MatCardHeader,
    MatCardSubtitle,
    MatCardAvatar,
    NgStyle,
    MatFabButton,
    MatButton,
    MatCardActions,
    MatCardFooter,
    MatTable,
    MatFormField,
    MatInputModule,
    ReactiveFormsModule,
    MatMenuTrigger,
    MatMenu,
    RouterLink,
    MatMenuItem,
    RouterLinkActive
  ],
  templateUrl: './group-list.component.html',
  styleUrl: './group-list.component.css'
})
export class GroupListComponent implements OnInit{
  title = 'Gruppi di firma'
  groupList: Group[] = groups;
  filteredGroupList: Group[] = [];
  maxUsers: number = 3;

  ngOnInit(): void {
    this.filteredGroupList = this.groupList;
    }

  filterBy(nameInput: HTMLInputElement) {
    this.filteredGroupList = this.groupList.filter(p =>
      p.groupName.toLowerCase().includes(nameInput.value.toLowerCase()) ||
      p.warning.toLowerCase().includes(nameInput.value.toLowerCase())
    )
  }

  delete(index: number) {
    this.groupList.splice(index, 1)
  }
}
