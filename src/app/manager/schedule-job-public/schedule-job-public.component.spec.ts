import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleJobPublicComponent } from './schedule-job-public.component';

describe('ScheduleJobPublicComponent', () => {
  let component: ScheduleJobPublicComponent;
  let fixture: ComponentFixture<ScheduleJobPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleJobPublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleJobPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
