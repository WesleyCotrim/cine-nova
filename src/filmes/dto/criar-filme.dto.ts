import {IsString, IsNumber, IsNotEmpty, Min} from 'class-validator'

export class CriarFilmesDto {

    @IsString()
    @IsNotEmpty()
    titulo: string

    @IsNumber()
    @Min(0.01)
    ano: number

    @IsString()
    @IsNotEmpty()
    genero: string

    @IsString()
    @IsNotEmpty()
    diretor: string

    @IsNumber()
    @Min(0.01)
    nota: number
}
