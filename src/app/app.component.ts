import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Column } from './components/shared/table/column';
import { ColumnAction } from './components/shared/table/column-action';
import { ColumnEntity } from './components/shared/table/column-entity';
import { ColumnStatus } from './components/shared/table/column-status';
import { Columns } from './components/shared/table/columns';
import { TypeAction } from './components/shared/table/type-action.enum';
import { TypeField } from './components/shared/table/type-field.enum';
import { TypeStyle } from './components/shared/table/type-style.enum';
import { Atendimento } from './model/atendimento';
import { StatusAtendimento } from './model/status-atendimento.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  pageSize = 2;
  pageIndex = 0;
  pagelength = 7;

  dataSource = new MatTableDataSource<Atendimento>();

  displayedColumns: Column[] = [
    new ColumnStatus("status", "Situação", [TypeStyle.W100, TypeStyle.TCENTER], TypeField.STATUS),
    new ColumnEntity("cliente", "Nome"),
    new ColumnEntity("animal", "Animal"),

    new Columns("telefones", "Telefones", [TypeStyle.W150], TypeField.PHONE),
    new Columns("data", "Data", [TypeStyle.W200, TypeStyle.TCENTER], TypeField.DATETIME),
    new Columns("observacao", "Observação"),
    new ColumnAction("action", [TypeAction.SUCCESS, TypeAction.EDIT, TypeAction.DELETE])
  ];

  title = 'angular-table-material';

  pageOne: Atendimento[] = [
    { cliente: { nome: 'Jon Arbuckle', ativo: true, id: 1 }, animal: { nome: 'Odie', ativo: true, id: 1 }, data: new Date().toDateString(), status: StatusAtendimento.Finalizado, telefones: "18998652768", observacao: "Buscar uma hora antes da consulta" },
    { cliente: { nome: 'Jon Arbuckle', ativo: true, id: 1 }, animal: { nome: 'Garfield', ativo: true, id: 1 }, data: new Date().toDateString(), status: StatusAtendimento.Atrasado, telefones: "1854335322", observacao: "Ligar antes da consulta" },
    { cliente: { nome: 'Charlie Brow', ativo: true, id: 1 }, animal: { nome: 'Snoopy', ativo: true, id: 1 }, data: new Date().toDateString(), status: StatusAtendimento.Pendente, telefones: "18998652768", observacao: "" },
    { cliente: { nome: 'George Newton', ativo: true, id: 1 }, animal: { nome: 'Beethoven ', ativo: true, id: 1 }, data: new Date().toDateString(), status: StatusAtendimento.Cancelado, telefones: "18998652768", observacao: "" },
    { cliente: { nome: 'Doug Funnie', ativo: true, id: 1 }, animal: { nome: 'Costelinha ', ativo: true, id: 1 }, data: new Date().toDateString(), status: StatusAtendimento.Pendente, telefones: "18998652768", observacao: "" },
    { cliente: { nome: 'Bart Simpson', ativo: true, id: 1 }, animal: { nome: 'Ajudante de Papai Noel', ativo: true, id: 1 }, data: new Date().toDateString(), status: StatusAtendimento.Pendente, telefones: "18998652768", observacao: "Confirmar Tratamento" },
    { cliente: { nome: 'Stanley Ipkiss', ativo: true, id: 1 }, animal: { nome: 'Maylon', ativo: true, id: 1 }, data: new Date().toDateString(), status: StatusAtendimento.Pendente, telefones: "18998652768", observacao: "" },
  ];


  pageTwo: Atendimento[] = [
    { cliente: { nome: 'Sabrina', ativo: true, id: 1 }, animal: { nome: 'Salem Saberhagen', ativo: true, id: 1 }, data: new Date().toDateString(), status: StatusAtendimento.Pendente, telefones: "18998652768", observacao: "" },
    { cliente: { nome: 'Magali', ativo: true, id: 1 }, animal: { nome: 'Mingau', ativo: true, id: 1 }, data: new Date().toDateString(), status: StatusAtendimento.Pendente, telefones: "18998652768", observacao: "Buscar uma hora antes da consulta" },
    { cliente: { nome: 'James Bowen', ativo: true, id: 1 }, animal: { nome: 'Bob ', ativo: true, id: 1 }, data: new Date().toDateString(), status: StatusAtendimento.Cancelado, telefones: "18998652768", observacao: "" },
  ];


  ngOnInit(): void {
    this.carregarDados();
  }

  onConfirm(entity: Atendimento) { }

  onEdit(entity: Atendimento) { }

  onDelete(id: number, descricao: String) { }

  onPesquisar(pageIndex: number = 0) {

    if (pageIndex == 0) {
      this.dataSource = new MatTableDataSource<Atendimento>(this.pageTwo);
      this.pageIndex = 1;
      this.pageSize = 7;
      this.pagelength = 10;
    } else {
      this.carregarDados();
    }

  }

  private carregarDados() {
    this.dataSource = new MatTableDataSource<Atendimento>(this.pageOne);
    this.pageIndex = 0;
    this.pageSize = 7;
    this.pagelength = 10;
  }

}
