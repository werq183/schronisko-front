import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OgloszeniaService } from '../ogloszenia.service';
import {NgIf} from "@angular/common";

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

  constructor(
    private route: ActivatedRoute,
    private ogloszeniaService: OgloszeniaService
  ) {}

  ngOnInit(): void {
    this.getOgloszenie();
  }

  getOgloszenie(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.ogloszeniaService.getOgloszenieById(id).subscribe(ogloszenie => {
      this.ogloszenie = ogloszenie;
    });
  }

  reserve(): void {
    // Tutaj zostanie dodana logika rezerwacji
    console.log('Rezerwacja:', this.ogloszenie.id);
  }
}
