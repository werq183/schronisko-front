import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgIf, NgOptimizedImage } from "@angular/common";
import { MatButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { AuthService } from "../auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatButton,
    MatTooltip,
    NgIf,
    AsyncPipe,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public isMenuCollapsed = true;
  isLoggedIn$ = this.authService.isLoggedIn;

  constructor(private authService: AuthService, protected router: Router) {}  // Wstrzyknij Router

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  login() {
    this.router.navigate(['/login']);  // Użyj Router do nawigacji
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);  // Przekieruj do strony logowania po wylogowaniu
  }
}
