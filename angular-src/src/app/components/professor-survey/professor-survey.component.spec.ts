import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorSurveyComponent } from './professor-survey.component';

describe('ProfessorSurveyComponent', () => {
  let component: ProfessorSurveyComponent;
  let fixture: ComponentFixture<ProfessorSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
