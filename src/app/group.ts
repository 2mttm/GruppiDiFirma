import {User} from "./user";
import {GroupFunction} from "./groupFunction";

export interface Group {
  id: number,
  groupName: string,
  minValue: string,
  maxValue: string,
  warning: string,
  users: User[],
  functions: GroupFunction[]
}
