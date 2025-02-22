import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}


@Component({
  selector: 'app-drangonball',
  imports: [
    // NgClass
  ],
  templateUrl: './drangonball.component.html',
})
export class DrangonballComponent {

  name = signal('Gohan');
  power = signal(1000);



  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
    { id: 3, name: 'piccolo', power: 3000 },
    { id: 3, name: 'Yamcha', power: 400 },
  ])

  powerClasses = computed(() => {
    return {
      'text-danger': true,
    }
  })
}
