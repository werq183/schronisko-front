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
    this.profileService.updateProfile(this.profile).subscribe({
      next: (data) => {
        this.profile = data;
        this.error = null;
      },
      error: (err) => {
        this.error = err.error.detail || 'Failed to update profile';
      }
    });
  }
}
