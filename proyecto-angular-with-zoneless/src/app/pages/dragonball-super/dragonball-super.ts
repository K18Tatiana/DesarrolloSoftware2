import { Component, inject, signal, effect } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterList, CharacterAdd],
  templateUrl: './dragonball-super.html'
})
export class DragonballSuper {

  /*
  constructor(
    public dragonballService: DragonballService
  ) {

  }
  */

  public dragonballService = inject(DragonballService);
  count = signal(0);

  /*
  prueba() {
    effect(() => {
      console.log(`Prueba: ${this.count()}`);
    })
    // Un efecto es una función que se ejecuta cuando el valor de la señal cambia
  }
  */
}
