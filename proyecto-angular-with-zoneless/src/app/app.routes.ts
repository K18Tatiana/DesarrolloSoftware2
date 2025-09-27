import { Routes } from '@angular/router';
import { CounterPage } from './pages/counter/counter-page';
import { CarPage } from './pages/car/car-page';

export const routes: Routes = [
  {
    path: '',
    component: CounterPage
  },
  {
    path: 'car',
    component: CarPage
  }
];
