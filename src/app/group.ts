import {User} from "./user";
import {GroupFunction} from "./groupFunction";

export class Group {
  id: number = 0
  groupName: string = ''
  minValue: string = '0'
  maxValue: string = '10'
  warning: string = ''
  users: User[] = []
  functions: GroupFunction[] = []
}
