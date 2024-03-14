import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgForOf, NgIf} from "@angular/common";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {GroupsComponent} from "./groups/groups.component";
import {groups} from "./mock-groups";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, MatCard, MatCardTitle, MatCardContent, NgIf, GroupsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly groups = groups;
}
