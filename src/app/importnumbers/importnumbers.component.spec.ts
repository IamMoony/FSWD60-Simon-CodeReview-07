import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportnumbersComponent } from './importnumbers.component';

describe('ImportnumbersComponent', () => {
  let component: ImportnumbersComponent;
  let fixture: ComponentFixture<ImportnumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportnumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportnumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
