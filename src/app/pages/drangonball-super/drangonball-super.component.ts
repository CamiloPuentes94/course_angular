import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";

interface Character {
  id: number;
  name: string;
  power: number;
}


@Component({
  selector: 'drangonball-super',
  templateUrl: './drangonball-super.component.html',
  imports: [CharacterListComponent],
})
export class DrangonballSuperComponent {

  name = signal('');
  power = signal(0);



  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ])

  addCharacter() {
    if(!this.name() || !this.power() || this.power() < 0) {
      return;
    }
    const newCharacter = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }

    this.characters.update(
      characters => [...characters, newCharacter]
    )
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
