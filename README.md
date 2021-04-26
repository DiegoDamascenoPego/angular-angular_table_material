# Angular Material - Mat-Table 

Projeto utiliza [Angular CLI](https://github.com/angular/angular-cli) version 11.0.1.

# Component Table material

O componente desenvolvido possui a finalidade de demonstrar o uso de colunas personalizaveis em um mat-table, sendo recomendado seu para telas de lista de resgistros anexadas a rotina de cadastros.

Ele disponiniliza forma para o desenvolvedor customizar os campos e formatar os valores.

![](mat-table-example.gif)

## Recursos

Recursos disponíveis

* Definição de colunas
  * Column
    > Utilizado para colunas simples sem a necessidade de customização
  * ColumnStatus
    > Utilizado para definir colunas de status conforme especificado **TypeStatus**
  * ColumnEntity
    > utilizado para mostrar campos de uma entidade associada  exemplo:
    ```
    
    export interface Cliente {
      id: number;
      nome: string;
      ativo: boolean;
    }
    
    export interface Atendimento {
      cliente: Cliente;
    }        
    
    displayedColumns: Column[] = [
      new ColumnEntity("cliente", "Nome"),
      new ColumnEntity("animal", "Animal"),
    ];
    
    ```
  * ColumnAction
  > Utilizado para definir com coluna de Ação conforme **TypeAction**
  * ColumnMask
  > Utilizado para definir tipo de mascara que o resultado deve ser apresentado na **tabela**
  > Recurso realizado apartir de [ngx-mask](https://www.npmjs.com/package/ngx-mask)
* Formatação de colunas 
> A colunas são renderizadas conforme seu tipo definido por **TypeField**
* TEXT
> Formato padrão de define o resultado conforme definido pela entidade
* NUMBER
> Formato utiliza o DecimalPipe
* CURRENCY
> Formato utiliza o CurrencyPipe
* PERCENT
> Formato utiliza o PercentPipe
* DATETIME
>  Formato utiliza DatePipe com format **dd/MM/yyyy hh:mm**
* ACTION
> Define que a coluna referência um status conforme **TypeAction**
* PHONE
> Formato utiliza MaskPipe
* STATUS
> Define que a coluna referência um status conforme **TypeField**
  
* Paginação
* Ações
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

### Estilização de colunas
Uma forma de estilizar o conteúdo das colunas foi disponibilizado no componente através **TypeStyle**
* Alinhar conteúdo
  * TCENTER
  * TRIGHT
  * TLEFT
* Tamanho máximo de conteúdo
  * W75
  * W100
  * W300
  * W400
