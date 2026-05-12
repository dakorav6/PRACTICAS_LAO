import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbeLogin } from './orbe-login';

describe('OrbeLogin', () => {
  let component: OrbeLogin;
  let fixture: ComponentFixture<OrbeLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrbeLogin],
    }).compileComponents();

    fixture = TestBed.createComponent(OrbeLogin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
