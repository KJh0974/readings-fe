import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetersComponent } from './meters.component';

describe('MetersComponent', () => {
  let component: MetersComponent;
  let fixture: ComponentFixture<MetersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
