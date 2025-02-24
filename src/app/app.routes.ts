import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DrangonballComponent } from './pages/drangonball/drangonball.component';


export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent
  },
  {
    path: 'hero',
    component: HeroPageComponent
  },
  {
    path: 'drangonball',
    component: DrangonballComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

];
