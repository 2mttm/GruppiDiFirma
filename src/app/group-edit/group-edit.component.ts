import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Group} from "../group";
import {Function} from "../function"
import {groups} from "../mock-groups";
import {switchMap} from "rxjs";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatIconButton} from "@angular/material/button";
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
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
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {GroupFunction} from "../groupFunction";
import {User} from "../user";
import {users} from "../mock-users";

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
        NgIf,
        MatSlideToggle,
        MatSuffix
    ],
    templateUrl: './group-edit.component.html',
    styleUrl: './group-edit.component.css'
})
export class GroupEditComponent implements OnInit {
    id?: number
    group: Group = new Group()
    editMode: boolean = false;

    constructor(private route: ActivatedRoute) {
    }

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
    columnsToDisplay: string[] = ['toggle', 'service', 'min', 'max'];
    columnsToDisplayUsers: string[] = ['toggle', 'userInitials', 'fullName']
    dataSource: Function[] = functions;
    dataSourceUsers = new MatTableDataSource(users);

    isFunctionActive(fn: Function): boolean {
        return this.group.functions.some((f: GroupFunction) => f.functionCode === fn.function_code);
    }

    toggleFunction(fn: Function): void {
        const index = this.group.functions.findIndex((f: GroupFunction) => f.functionCode === fn.function_code);
        if (index !== -1) {
            this.group.functions.splice(index, 1);
        } else {
            const newFunction: GroupFunction = {
                title: fn.function_name,
                functionCode: fn.function_code,
                minValue: this.group.minValue,
                maxValue: this.group.maxValue,
            };
            this.group.functions.push(newFunction);
        }
        // Code for transmitting data to server can be added here
    }
    isUserActive(user: User): boolean {
        return this.group.users.some((u: User) => u.userId === user.userId);
    }

    toggleUser(user: User): void {
        const index = this.group.users.findIndex((u: User) => u.userId === user.userId);
        if (index !== -1) {
            this.group.users.splice(index, 1);
        } else {
            this.group.users.push(user);
        }
        // Code for transmitting data to server can be added here
    }

    getFunctionMin(fn: Function): string {
        const func = this.group.functions.find((f: GroupFunction) => f.functionCode === fn.function_code);
        return func ? func.minValue : '0';
    }

    getFunctionMax(fn: Function): string {
        const func = this.group.functions.find((f: GroupFunction) => f.functionCode === fn.function_code);
        return func ? func.maxValue : '0';
    }

    setFunctionMin(fn: any, value: string): void {
        const index = this.group.functions.findIndex((f: GroupFunction) => f.functionCode === fn.function_code);
        if (index !== -1) {
            this.group.functions[index].minValue = value;
        }
    }

    setFunctionMax(fn: any, value: string): void {
        const index = this.group.functions.findIndex((f: GroupFunction) => f.functionCode === fn.function_code);
        if (index !== -1) {
            this.group.functions[index].maxValue = value;
        }
    }

    validateMinValue(fn: any, event: any): void {
        const newValue = event.target.value;
        const groupMinValue = parseInt(this.group.minValue);
        if (parseInt(newValue) < groupMinValue) {
            event.target.value = groupMinValue.toString();
            this.setFunctionMin(fn, groupMinValue.toString());
        }
    }

    validateMaxValue(fn: any, event: any): void {
        const newValue = event.target.value;
        const groupMaxValue = parseInt(this.group.maxValue);
        if (parseInt(newValue) > groupMaxValue) {
            event.target.value = groupMaxValue.toString();
            this.setFunctionMax(fn, groupMaxValue.toString());
        }
    }

    filterUsers(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSourceUsers.filter = filterValue.trim().toLowerCase();
    }
}
