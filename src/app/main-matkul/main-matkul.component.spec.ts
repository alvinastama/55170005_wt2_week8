import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMatkulComponent } from './main-matkul.component';

describe('MainMatkulComponent', () => {
  let component: MainMatkulComponent;
  let fixture: ComponentFixture<MainMatkulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMatkulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMatkulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
