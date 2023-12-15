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
    url:'https://www.amazon.com/Learning-JavaScript-Data-Structures-Algorithms-ebook/dp/B00OYTCT02/ref=sr_1_4?crid=32CF35N0F4OOF&keywords=learning+javascript+data+structures+and+algorithms&qid=1702663740&sprefix=learning+javascript+data%2Caps%2C611&sr=8-4'
  }

  constructor(){}

  ngOnInit(): void {

  }

}
