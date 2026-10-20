import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { FilmesService } from "./filmes.service.js";
import type { FilmesInterface } from "./filmes/filmes-interface.js";
import { CriarFilmesDto } from "./filmes/dto/criar-filme.dto.js";

@Controller('filmes')
export class FilmesController{

    constructor(
        private readonly filmesService: FilmesService){}

    @Post()
    cadastrarFilme(@Body() dados: CriarFilmesDto) {
    return this.filmesService.cadastrarFilme(dados);
  }

    @Get()
    listarFilmes(): FilmesInterface[] {
        return this.filmesService.listarFilmes()
    }

    @Get(':id')
    buscaPorId(@Param("id") id: number): FilmesInterface | undefined {
        return this.filmesService.buscaPorId(+id)
    }

    @Put(':id')
    atualizarFilme(@Param("id") id: number, @Body() dados: Omit<FilmesInterface, 'id'>): FilmesInterface | undefined {
        return this.filmesService.atualizarFilme(+id, dados)
    }

    @Delete(':id')
    deletarFilme(@Param("id") id: number){
        return this.filmesService.deletarFilme(+id)
    }
}