import { Column } from "./column";
import { TypeAction } from "./type-action.enum";
import { TypeField } from "./type-field.enum";
import { TypeStyle } from "./type-style.enum";

export class ColumnAction implements Column{

  definition: string;
  type: TypeField;
  header: string;
  style?: TypeStyle[];
  canOrder?: boolean;
  mask?: string;
  action?: TypeAction[];

  constructor(definition: string, action?: TypeAction[]) {
     this.definition = definition;
     this.type = TypeField.ACTION;
     this.style = [TypeStyle.NONE];
     this.header = "Ações";
     this.action = action || [TypeAction.EDIT, TypeAction.DELETE];
  }
}
