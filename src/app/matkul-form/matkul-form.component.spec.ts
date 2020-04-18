import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatkulFormComponent } from './matkul-form.component';

describe('MatkulFormComponent', () => {
  let component: MatkulFormComponent;
  let fixture: ComponentFixture<MatkulFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatkulFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatkulFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
