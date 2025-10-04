import { Injectable, signal, computed, effect } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
}

@Injectable({
  providedIn: 'root'
})
export class DragonballService {
  characters = signal<Character[]>(loadFromLocalStorage());

  powerClass = computed(() => {
    return {
      'text-danger': true,
    }
  })

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  })

  addCharacter(character: Character) {
    this.characters.update(list => [...list, character]);
  }
}
