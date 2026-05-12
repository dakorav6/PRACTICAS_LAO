import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orbe_Principal } from './orbe-principal';

describe('OrbePrincipal', () => {
  let component: Orbe_Principal;
  let fixture: ComponentFixture<Orbe_Principal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Orbe_Principal],
    }).compileComponents();

    fixture = TestBed.createComponent(Orbe_Principal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
