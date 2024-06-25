import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: any = {};
  error: string | null = null;
  successMessage: string | null = null;


  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void {
    this.profileService.getProfile().subscribe({
      next: (data) => {
        this.profile = data;
        this.error = null;
      },
      error: (err) => {
        this.error = err.error.detail || 'Failed to load profile';
      }
    });
  }

  updateProfile(): void {
    let updateData = {
      user: {
        email: this.profile.user.email
      },
      adres_1: this.profile.adres_1,
      adres_2: this.profile.adres_2,
      nr_tel: this.profile.nr_tel
    };

    this.profileService.updateProfile(updateData).subscribe({
      next: (data) => {
        this.profile = data; // Przypisanie zaktualizowanych danych do profilu
        this.error = null;
        this.successMessage = 'Profil zaktualizowany pomyślnie.';
        setTimeout(() => this.successMessage = null, 3000);
        this.loadProfile(); // Ponowne wczytanie profilu
      },
      error: (err) => {
        this.error = err.error.detail || 'Failed to update profile';
        setTimeout(() => this.error = null, 3000);
      }
    });
  }

}
