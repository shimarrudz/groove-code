import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('web');
  protected readonly status = signal<string | null>(null);
  private readonly http = inject(HttpClient);

  ngOnInit(): void {
    this.http
      .get<{ status: string }>('http://localhost:3000/health')
      .subscribe({
        next: (res) => this.status.set(res.status),
        error: () => this.status.set('error'),
      });
  }
}