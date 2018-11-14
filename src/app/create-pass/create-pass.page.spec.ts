import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePassPage } from './create-pass.page';

describe('CreatePassPage', () => {
  let component: CreatePassPage;
  let fixture: ComponentFixture<CreatePassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePassPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
