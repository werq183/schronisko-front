import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OgloszeniaService } from '../ogloszenia.service';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-ogloszenia-detail',
  templateUrl: './ogloszenia-detail.component.html',
  standalone: true,
  imports: [
    NgIf
  ],
  styleUrls: ['./ogloszenia-detail.component.scss']
})
export class OgloszeniaDetailComponent implements OnInit {
  ogloszenie: any;
  userProfileCompleted: boolean = false;
  reservationSuccess: boolean = false;
  reservationError: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private ogloszeniaService: OgloszeniaService
  ) {}

  ngOnInit(): void {
    this.getOgloszenie();
    this.checkUserProfile();
  }

  getOgloszenie(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.ogloszeniaService.getOgloszenieById(id).subscribe(ogloszenie => {
      this.ogloszenie = ogloszenie;
    });
  }

  checkUserProfile(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.ogloszeniaService.getUserProfile().subscribe(profile => {
        this.userProfileCompleted = profile.adres_1 && profile.nr_tel;
      });
    }
  }

  reserve(): void {
    if (!this.userProfileCompleted) {
      alert('Proszę uzupełnić profil użytkownika przed dokonaniem rezerwacji.');
      return;
    }

    this.ogloszeniaService.reserveOgloszenie(this.ogloszenie.id).subscribe({
      next: () => {
        this.reservationSuccess = true;
        this.reservationError = null;
        this.ogloszenie.is_reserved = true;
      },
      error: (err) => {
        this.reservationError = 'Nie udało się zarezerwować tego ogłoszenia. Spróbuj ponownie później.';
      }
    });
  }
}
