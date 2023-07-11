import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadeDropdownsComponent } from './cascade-dropdowns.component';

describe('CascadeDropdownsComponent', () => {
  let component: CascadeDropdownsComponent;
  let fixture: ComponentFixture<CascadeDropdownsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CascadeDropdownsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CascadeDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
