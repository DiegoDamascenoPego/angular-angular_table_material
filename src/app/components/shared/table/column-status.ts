import { Column } from "./column";
import { Columns } from "./columns";
import { TypeStatus } from "./type-status.enum";

export class ColumnStatus extends Columns {

  getStatus(row, col: Column, status: TypeStatus): boolean {
    const value: string = row[col.definition].toString().toUpperCase();
    return value == status.toString();
  }
}
