import { Column } from "./column";
import { TypeAction } from "./type-action.enum";
import { TypeField } from "./type-field.enum";
import { TypeStyle } from "./type-style.enum";

export class Columns implements Column {

  definition: string;
  type: TypeField;
  header: string;
  style?: TypeStyle[];
  canOrder?: boolean;
  mask?: string;
  action?: TypeAction[];

  constructor(definition: string, header: string, style?: TypeStyle[], type?: TypeField, canOrder?: boolean, mask?: string) {
     this.definition = definition;
     this.type = type || TypeField.TEXT;
     this.header = header;
     this.style = style;
     this.canOrder = canOrder;
     this.mask = mask;
  }
}
