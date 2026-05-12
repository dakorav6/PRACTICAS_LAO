import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbeInicio } from './orbe-inicio';

describe('OrbeInicio', () => {
  let component: OrbeInicio;
  let fixture: ComponentFixture<OrbeInicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrbeInicio],
    }).compileComponents();

    fixture = TestBed.createComponent(OrbeInicio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
