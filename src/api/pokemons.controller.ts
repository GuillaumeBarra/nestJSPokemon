import { Controller, Get, Param } from '@nestjs/common';
import { Pokemon } from '.prisma/client';

@Controller('pokemon')
export class PokemonController {
  @Get()
  getPokemon() {
    const pokemon = {
      name: 'Pikachu',
      type: 'Electric',
      abilities: ['Static', 'Lightning Rod'],
      level: 1,
    };
    return pokemon;
  }

  @Get('/byType/:typeName')
  async getPokemonsByType(
    @Param('typeName') typeName: string,
  ): Promise<Pokemon[]> {
    const pokemons = [
      {
        id: 1,
        name: 'Pikachu',
        type: 'Electric',
        abilities: ['Static', 'Lightning Rod'],
        level: 1,
      },
    ];
    return pokemons;
  }
}
