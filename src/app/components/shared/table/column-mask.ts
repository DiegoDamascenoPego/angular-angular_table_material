import { Column } from "./column";
import { TypeAction } from "./type-action.enum";
import { TypeField } from "./type-field.enum";
import { TypeStyle } from "./type-style.enum";

export class ColumnMask implements Column {
  definition: string;
  type: TypeField;
  header: string;
  style?: TypeStyle[];
  canOrder?: boolean;
  mask?: string;
  action?: TypeAction[];

  constructor(definition: string, header: string, mask: string, style?: TypeStyle[]) {
    this.definition = definition;
    this.type = TypeField.TEXT;
    this.header = header;
    this.style = style;
    this.mask = mask;
  }
}
