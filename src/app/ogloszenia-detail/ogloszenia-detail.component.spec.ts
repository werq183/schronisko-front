import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OgloszeniaDetailComponent } from './ogloszenia-detail.component';

describe('OgloszeniaDetailComponent', () => {
  let component: OgloszeniaDetailComponent;
  let fixture: ComponentFixture<OgloszeniaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OgloszeniaDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OgloszeniaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
