import { Component, signal } from "@angular/core";

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.html',
  styleUrl: './car-page.css'
})
export class CarPage {

  brand = signal('Renault');
  year = signal(2020);
  student = signal('tatiana');

  getCarDescription() {
    return `${this.brand()} - ${this.year()}`;
  }

  changeCar() {
    this.brand.update(() => 'Kia');
    this.year.update(() => 2021);
  }

  resetForm() {
    this.brand.update(() => 'Renault');
    this.year.update(() => 2020);
  }

  changeYear() {
    this.year.update(() => 2025);
  }
}
