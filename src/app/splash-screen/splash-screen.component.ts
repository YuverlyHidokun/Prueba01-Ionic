import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {
  messages: string[] = [
    'Bienvenido a mi aplicación!',
    'Cargando recursos...',
    'Preparando la experiencia...',
    'Casi estamos listos...',
    '¡Empezamos!'
  ];
  currentMessage: string = '';
  messageIndex: number = 0;

  ngOnInit() {
    this.startSplashScreen();
  }

  startSplashScreen() {
    this.updateMessage();

    const intervalId = setInterval(() => {
      this.messageIndex++;
      if (this.messageIndex < this.messages.length) {
        this.updateMessage();
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
  }

  updateMessage() {
    this.currentMessage = this.messages[this.messageIndex];
  }
}