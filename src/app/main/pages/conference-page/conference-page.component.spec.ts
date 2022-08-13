import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencePageComponent } from './conference-page.component';

describe('ConferencePageComponent', () => {
  let component: ConferencePageComponent;
  let fixture: ComponentFixture<ConferencePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferencePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConferencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
