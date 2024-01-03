import { CategoriaService } from './../../service/categoria.service';
import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface Categoria {
  name: string;
  descricao: string;
  id: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements AfterViewInit,OnInit {
  displayedColumns: string[] = ['nome', 'descricao'];
  dataSource = new MatTableDataSource<Categoria>();
  categorias: Categoria[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private categoriaService: CategoriaService) {

  }
  ngOnInit(): void {
  this.categoriaService.getCategorias ()
  .subscribe((categorias: Categoria[]) => {
    this.categorias = categorias;
    this.dataSource.data = this.categorias;
  });
  }

  ngAfterViewInit() {
     this.dataSource.paginator = this.paginator;
  }
}
