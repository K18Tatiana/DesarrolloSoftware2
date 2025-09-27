import { Component, signal, computed } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterList],
  templateUrl: './dragonball-super.html'
})
export class DragonballSuper {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 100 },
    { id: 2, name: 'Vegeta', power: 90 },
    { id: 3, name: 'Krilin', power: 80 },
    { id: 4, name: 'Piccolo', power: 70 },
  ]);

  powerClass = computed(() => {
    return {
      'text-danger': true,
    }
  })

  addCharacter() {
    if(!this.name() && !this.power() && this.power() < 0) {
      return;
    }

    const newCharacter = {
      id: this.characters.length + 1,
      name: this.name(),
      power: this.power()
    }

    // const newListCharacters = [...this.characters(), newCharacter];

    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
