import { CurrencyPipe, DatePipe, DecimalPipe, PercentPipe } from '@angular/common';
import { EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { MaskPipe } from 'ngx-mask';
import { Component, OnInit } from '@angular/core';
import { TypeField } from './type-field.enum';
import { TypeStyle } from './type-style.enum';
import { TypeStatus } from './type-status.enum';
import { TypeAction } from './type-action.enum';
import { Column } from './column';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  @Input() displayedColumns: Column[] = [];
  @Input() dataSource: MatTableDataSource<any> | undefined;
  @Input() card = 'card-body'
  @Input() pagelength = 0;
  @Input() pageIndex = 0;
  @Input() pageSize = 1;

  @Output() confirm = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() page = new EventEmitter();



  ENUMS = TypeField;
  ACTION = TypeAction;
  STATUS = TypeStatus;

  constructor(
     private decimalPipe: DecimalPipe,
     private currencyPipe: CurrencyPipe,
     private percentPipe: PercentPipe,
     private datePipe: DatePipe,
     private maskPipe: MaskPipe) { }

  ngOnInit(): void {
  }

  columnsProps(): string[] {
     return this.displayedColumns.map((column: Column) => column.definition);
  }

  transform(type: TypeField, value: any, mask: string): string  {
     switch (type) {
        case TypeField.CURRENCY: return this.currencyPipe.transform(value, 'BRL', 'symbol', '1.2-2'); break;
        case TypeField.NUMBER: return this.decimalPipe.transform(value, '2'); break;
        case TypeField.PERCENT: return this.percentPipe.transform(value / 100, '2.2-2'); break;
        case TypeField.DATETIME: return this.datePipe.transform(value, 'dd/MM/yyyy hh:mm'); break;
        case TypeField.PHONE:
           if (value && (typeof value == 'string')){
              if (value.length == 10) {
                 return this.maskPipe.transform(value, '00 0000-0000');
              } else {
                 return this.maskPipe.transform(value, '00 00000-0000');
              }
           }
           break;
        case TypeField.STATUS: return ''; break;
        default:
           if (mask) {
              return this.maskPipe.transform(value, mask);
           }
           return value;
     }
  }

  columnsValue(row: any, col: Column): string {
     if (row[col.definition] instanceof Object) {
        return this.transform(col.type, col.get(row, col), col.mask);
     } else {
        return this.transform(col.type, row[col.definition], col.mask);
     }
  }

  columnsStatusValue(row: any, col: Column): string {
    return row[col.definition];
  }

  columnsStatus(row: any, col: Column, status: TypeStatus): boolean {
     return col.getStatus(row, col, status)
  }

  buttonView(col: Column, action: TypeAction) {
     return col.action.indexOf(action) >= 0;
  }

  buttonStyle(col: Column): string {
     return col.action.length > 2 ? 'btn-grid-full' : 'btn-grid';
  }

  columnStyle(col: Column): string {
     let styles = '';

     if (col.style) {

        col.style.forEach((value) => {
           switch (value) {
              case TypeStyle.TCENTER: styles = styles + 'th-center '; break;
              case TypeStyle.TRIGHT: styles = styles + 'th-right '; break;
              case TypeStyle.TLEFT: styles = styles + 'th-left '; break;
              case TypeStyle.W75: styles = styles + 'w-75 '; break;
              case TypeStyle.W100: styles = styles + 'w-100 '; break;
              case TypeStyle.W120: styles = styles + 'w-120 '; break;
              case TypeStyle.W150: styles = styles + 'w-150 '; break;
              case TypeStyle.W200: styles = styles + 'w-200 '; break;
              case TypeStyle.W250: styles = styles + 'w-250 '; break;
              case TypeStyle.W300: styles = styles + 'w-300 '; break;
              case TypeStyle.W350: styles = styles + 'w-350 '; break;
              case TypeStyle.W400: styles = styles + 'w-400 '; break;
              case TypeStyle.WA400: styles = styles + 'wa-400 '; break;

              case TypeStyle.MW250: styles = styles + 'mw-250 '; break;
              default:
                 '';
           }
        })
     }

     if (col.type !== TypeField.TEXT) {
        styles = styles + 'th-center ';
     }

     if (col.type === TypeField.ACTION) {
        styles = styles + 'th-Action ';
     }

     return styles;
  }

  onEdit(row: any) {
     this.edit.emit(row);
  }

  onConfirm(row: any) {
     this.confirm.emit(row);
  }

  onDelete(row: any) {
     this.delete.emit(row);
  }

  onPaginar(event: PageEvent) {
     this.page.emit(event.pageIndex);
  }

}
