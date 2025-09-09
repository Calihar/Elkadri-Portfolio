import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagueTimelineComponent } from './vague-timeline.component';

describe('VagueTimelineComponent', () => {
  let component: VagueTimelineComponent;
  let fixture: ComponentFixture<VagueTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VagueTimelineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VagueTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
