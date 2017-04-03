import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraSurveysComponent } from './extra-surveys.component';

describe('ExtraSurveysComponent', () => {
  let component: ExtraSurveysComponent;
  let fixture: ComponentFixture<ExtraSurveysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraSurveysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
