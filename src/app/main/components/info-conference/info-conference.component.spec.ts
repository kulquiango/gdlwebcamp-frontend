import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoConferenceComponent } from './info-conference.component';

describe('InfoConferenceComponent', () => {
  let component: InfoConferenceComponent;
  let fixture: ComponentFixture<InfoConferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoConferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
