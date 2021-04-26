import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Column } from 'src/app/components/shared/table/column';
import { ColumnAction } from 'src/app/components/shared/table/column-action';
import { ColumnMask } from 'src/app/components/shared/table/column-mask';
import { Columns } from 'src/app/components/shared/table/columns';
import { TypeAction } from 'src/app/components/shared/table/type-action.enum';
import { TypeStyle } from 'src/app/components/shared/table/type-style.enum';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.sass']
})
export class ClienteFormComponent implements OnInit {

  pageSize = 7;
  pageIndex = 0;
  pagelength = 3;

  dataSource = new MatTableDataSource<Cliente>();

  displayedColumns: Column[] = [
    new Columns("id", "Código", [TypeStyle.W100]),
    new Columns("nome", "Nome"),
    new ColumnMask("cpf", "CPF", '000.000.000-00'),
    new ColumnAction("action", [TypeAction.EDIT, TypeAction.DELETE])
  ];

  pageOne: Cliente[] = [
    { nome: 'Sabrina', id: 1, cpf:'81457737094' },
    { nome: 'Magali', id: 1, cpf: '48995466022'},
    { nome: 'James Bowen', id: 1, cpf: '82154159036'},
  ];


  ngOnInit(): void {
    this.carregarDados();
  }

  onEdit(entity: Cliente) { }

  onDelete(id: number, descricao: String) { }

  onPesquisar(pageIndex: number = 0) {
    this.carregarDados();
  }

  private carregarDados() {
    this.dataSource = new MatTableDataSource<Cliente>(this.pageOne);
    this.pageIndex = 0;
    this.pageSize = 7;
    this.pagelength = 3;
  }

}
