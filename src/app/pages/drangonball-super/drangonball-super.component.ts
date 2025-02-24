
import { Component, inject } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonballService } from '../../services/dragonball.service';


@Component({
  selector: 'drangonball-super',
  templateUrl: './drangonball-super.component.html',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DrangonballSuperComponent {

  public dragonballService = inject(DragonballService);

}
