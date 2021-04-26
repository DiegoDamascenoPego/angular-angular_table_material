import { Column } from "./column";
import { Columns } from "./columns";
import { TypeAction } from "./type-action.enum";
import { TypeField } from "./type-field.enum";
import { TypeStyle } from "./type-style.enum";

export class ColumnEntity implements Column{

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
     this.style = style || [TypeStyle.W200];
     this.canOrder = canOrder;
     this.mask = mask;
  }

  get(row: any, col: Column): string {
     return row[col.definition].nome;
  }
}
