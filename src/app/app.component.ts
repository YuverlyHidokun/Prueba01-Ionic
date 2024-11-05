import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  showSplash = true; // Controla la visibilidad del Splash Screen

  ngOnInit() {
    // Oculta el Splash Screen después de 5 segundos
    setTimeout(() => {
      this.showSplash = false;
    }, 5000);
  }
}