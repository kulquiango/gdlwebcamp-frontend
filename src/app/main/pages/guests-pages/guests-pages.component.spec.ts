import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsPagesComponent } from './guests-pages.component';

describe('GuestsPagesComponent', () => {
  let component: GuestsPagesComponent;
  let fixture: ComponentFixture<GuestsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestsPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
