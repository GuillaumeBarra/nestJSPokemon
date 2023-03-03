import { Controller, Get } from '@nestjs/common';

@Controller('pokemon')
export class PokemonController {
  @Get()
  getPokemon() {
    const pokemon = {
      name: 'Pikachu',
      type: 'Electric',
      abilities: ['Static', 'Lightning Rod'],
      stats: {
        hp: 35,
        attack: 55,
        defense: 40,
        speed: 90,
      },
    };
    return pokemon;
  }
}
