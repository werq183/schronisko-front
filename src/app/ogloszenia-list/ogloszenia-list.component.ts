import { Component, OnInit } from '@angular/core';
import { OgloszeniaService } from '../ogloszenia.service';
import { NgForOf, NgIf, NgOptimizedImage } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-ogloszenia',
  templateUrl: './ogloszenia-list.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
    NgIf
  ],
  styleUrls: ['./ogloszenia-list.component.scss']
})
export class OgloszeniaListComponent implements OnInit {
  ogloszenia: any[] = [];

  // Add the Router to the constructor
  constructor(
    private ogloszeniaService: OgloszeniaService,
    private router: Router  // Inject the Router
  ) {}

  ngOnInit(): void {
    this.ogloszeniaService.getOgloszenia().subscribe(data => {
      this.ogloszenia = data;
      console.log(this.ogloszenia);  // Checking if data is correctly received
    }, error => {
      console.error('Error fetching announcements:', error);
    });
  }

  viewOgloszenie(id: number): void {
    this.router.navigate(['/ogloszenie', id]);
  }
}
