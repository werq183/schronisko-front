import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OgloszeniaListComponent } from './ogloszenia-list.component';

describe('OgloszeniaListComponent', () => {
  let component: OgloszeniaListComponent;
  let fixture: ComponentFixture<OgloszeniaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OgloszeniaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OgloszeniaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
