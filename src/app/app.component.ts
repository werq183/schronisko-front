import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
title = 'frontend';
url: string = 'http://127.0.0.1:8000/users/1/';constructor(private http: HttpClient) {}public getLocations() {
this.http.get(this.url).toPromise().then((data) => {
console.log(data);
});
}}
