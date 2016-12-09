/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrgTreeTabComponent } from './org-tree-tab.component';

describe('OrgTreeTabComponent', () => {
  let component: OrgTreeTabComponent;
  let fixture: ComponentFixture<OrgTreeTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgTreeTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgTreeTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
