import { Injectable } from "@nestjs/common";
import { FilmesInterface } from "./filmes/filmes-interface.js";

@Injectable()
export class FilmesService {
    private filmes: FilmesInterface[] = [
         {
    id: 1,
    titulo: "Um Sonho de Liberdade",
    ano: 1994,
    genero: "Drama",
    diretor: "Frank Darabont",
    nota: 9.3
  },
  {
    id: 2,
    titulo: "O Poderoso Chefão",
    ano: 1972,
    genero: "Crime",
    diretor: "Francis Ford Coppola",
    nota: 9.2
  },
  {
    id: 3,
    titulo: "Batman: O Cavaleiro das Trevas",
    ano: 2008,
    genero: "Ação",
    diretor: "Christopher Nolan",
    nota: 9.0
  },
  {
    id: 4,
    titulo: "A Lista de Schindler",
    ano: 1993,
    genero: "Biografia",
    diretor: "Steven Spielberg",
    nota: 9.0
  },
  {
    id: 5,
    titulo: "Pulp Fiction: Tempo de Violência",
    ano: 1994,
    genero: "Crime",
    diretor: "Quentin Tarantino",
    nota: 8.9
  },
  {
    id: 6,
    titulo: "O Senhor dos Anéis: O Retorno do Rei",
    ano: 2003,
    genero: "Aventura",
    diretor: "Peter Jackson",
    nota: 9.0
  },
    ]
    private proximoId = 1

    listarFilmes(): FilmesInterface[] {
        return this.filmes
    }

    cadastrarFilme(dados: Omit<FilmesInterface, 'id'>): FilmesInterface{
        const novoFilme: FilmesInterface = {
            id: this.proximoId++,
            ...dados,
        }

        this.filmes.push(novoFilme)

        return novoFilme
    }

    buscaPorId(id: number): FilmesInterface | undefined {
            for(let i = 0; i < this.filmes.length; i++){
                if(id === this.filmes[i].id){
                    return this.filmes[i]
                }
            }
        }

    atualizarFilme(id: number, dados: Omit<FilmesInterface, 'id'>): FilmesInterface | undefined {
        for(let i = 0; i < this.filmes.length; i++){
                if(id === this.filmes[i].id){
                    this.filmes[i].titulo = dados.titulo,
                    this.filmes[i].ano = dados.ano,
                    this.filmes[i].diretor = dados.diretor
                    this.filmes[i].nota = dados.nota
                    this.filmes[i].genero = dados.genero

                    return this.filmes[i]
                }
            }
    }

    deletarFilme(id: number): boolean | undefined {
        for(let i = 0; i < this.filmes.length; i++){
                if(id === this.filmes[i].id){
                    this.filmes.splice(i, 1)
                    return true
                }
        }

        return false
    }

}