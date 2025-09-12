import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnityEmbeddedComponent } from './unity-embedded.component';

describe('UnityEmbeddedComponent', () => {
  let component: UnityEmbeddedComponent;
  let fixture: ComponentFixture<UnityEmbeddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnityEmbeddedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnityEmbeddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
