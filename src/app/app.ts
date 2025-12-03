import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('agenda-conecta-client');

  constructor(
    private primeng: PrimeNG
  ){}

  ngOnInit(): void {
    this.primeng.ripple.set(true);
  }
}
