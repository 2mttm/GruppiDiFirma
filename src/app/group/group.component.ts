import {Component, input, Input} from '@angular/core';
import {
    MatCard,
    MatCardAvatar,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle
} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {NgForOf, NgIf} from "@angular/common";
import {Group} from "../group";

@Component({
  selector: 'app-group',
  standalone: true,
    imports: [
        MatCard,
        MatCardAvatar,
        MatCardContent,
        MatCardHeader,
        MatCardSubtitle,
        MatCardTitle,
        MatIcon,
        MatIconButton,
        NgForOf,
        NgIf
    ],
  templateUrl: './group.component.html',
  styleUrl: './group.component.css'
})
export class GroupComponent {
  @Input() group: Group = new Group();
  @Input() maxUsers: number = 3;
}
