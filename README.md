# Angular Material - Mat-Table 

Projeto utiliza [Angular CLI](https://github.com/angular/angular-cli) version 11.0.1.

# Component Table material

O componente desenvolvido possui a finalidade de demonstrar o uso de colunas personalizaveis em um mat-table, sendo recomendado seu para telas de lista de resgistros anexadas a rotina de cadastros.

Ele disponiniliza forma para o desenvolvedor customizar os campos e formatar os valores.

![](mat-table-example.gif)

## Features

Recursos disponíveis

* Definição de colunas
  * Column
  * ColumnStatus
  * ColumnEntity
  * ColumnAction
  * ColumnMask
   
* Paginação
* Actions
  * Confirmar
  * Editar
  * Excluir

## Como usar
### Definir displayedColumns
```
displayedColumns: Column[] = [
    new ColumnStatus("status", "Situação", [TypeStyle.W100, TypeStyle.TCENTER], TypeField.STATUS),
    {
      definition: "cliente", type: TypeField.TEXT, header: "Nome",
      get(row: any, col: Column): string { return row[col.definition].nome },
    },
    {
      definition: "animal", type: TypeField.TEXT, header: "Animal", style: [TypeStyle.W200],
      get(row: any, col: Column): string { return row[col.definition].nome },
    },

    new Columns("telefones", "Telefones", [TypeStyle.W150], TypeField.PHONE),
    new Columns("data", "Data", [TypeStyle.W200, TypeStyle.TCENTER], TypeField.DATETIME),
    new Columns("observacao", "Observação"),
    new ColumnAction("action", [TypeAction.SUCCESS, TypeAction.EDIT, TypeAction.DELETE])
  ];
```
### Declarar **MatTableDataSource** 
```
  pageSize = 1;
  pageIndex = 7;
  pagelength = 10;
  
  dataSource = new MatTableDataSource<Atendimento>();
  
  pageOne: Atendimento[] = [];
  
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Atendimento>(this.pageTwo);
  }

```
### Importar componente 
```    <app-table
      [dataSource]="dataSource"
      [displayedColumns]="displayedColumns"
      (edit)="onEdit($event)"
      (delete)="onDelete($event.id, $event.nome)"
      [pageIndex]="pageIndex"
      [pagelength]="pagelength"
      [pageSize]="pageSize"
      (page)="onPesquisar(pageIndex)">
    </app-table>
```

