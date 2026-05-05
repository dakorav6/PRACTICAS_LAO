import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoPrinciapal } from './cuerpo-princiapal';

describe('CuerpoPrinciapal', () => {
  let component: CuerpoPrinciapal;
  let fixture: ComponentFixture<CuerpoPrinciapal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuerpoPrinciapal],
    }).compileComponents();

    fixture = TestBed.createComponent(CuerpoPrinciapal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
