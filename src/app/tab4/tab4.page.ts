import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page {
  a: number | null = null;
  b: number | null = null;
  c: number | null = null;
  raiz1: number | null = null;
  raiz2: number | null = null;
  error: string = '';

  calcularRaices() {
    this.error = '';
    this.raiz1 = null;
    this.raiz2 = null;

    if (this.a === null || this.b === null || this.c === null) {
      this.error = 'Por favor, ingresa valores válidos para a, b y c.';
      return;
    }

    if (this.a === 0) {
      this.error = 'El coeficiente "a" no puede ser cero.';
      return;
    }

    const discriminante = this.b * this.b - 4 * this.a * this.c;

    if (discriminante < 0) {
      this.error = 'Las raíces son complejas.';
    } else {
      this.raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
      this.raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
    }
  }
}
