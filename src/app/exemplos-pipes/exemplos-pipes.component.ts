import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Aprendendo estruturas de dados e algoritmos JavaScript',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url:'http://a.co/glqjpRP'
  }

  livros: string[] = ['Java', 'Angular 2']

  filtro: string = '';

  addCurso(valor: any){
    this.livros.push(valor);
    console.log(this.livros);
  }

  obterCursos(){
    if(this.livros.length === 0 || this.filtro === null || this.filtro.trim() === ''){
      return this.livros;
    }

    return this.livros.filter((v) => {
      if(v.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase()) >= 0){
        return true;
      }
      return false;
    } )
  }

  constructor(){}

  ngOnInit(): void {

  }

}
