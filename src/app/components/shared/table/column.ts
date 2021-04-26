import { TypeAction } from "./type-action.enum";
import { TypeField } from "./type-field.enum";
import { TypeStatus } from "./type-status.enum";
import { TypeStyle } from "./type-style.enum";

export interface Column {
  definition: string;
  type: TypeField;
  get?(row: any, col: Column): string;
  getStatus?(row, col: Column, status: TypeStatus): boolean;
  header: string
  style?: TypeStyle[];
  canOrder?: boolean;
  mask?: string;
  action?: TypeAction[];
}
