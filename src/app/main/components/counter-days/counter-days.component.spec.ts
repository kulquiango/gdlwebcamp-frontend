import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDaysComponent } from './counter-days.component';

describe('CounterDaysComponent', () => {
  let component: CounterDaysComponent;
  let fixture: ComponentFixture<CounterDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterDaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
