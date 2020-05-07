import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalExteriorLouversComponent } from './metal-exterior-louvers.component';

describe('MetalExteriorLouversComponent', () => {
  let component: MetalExteriorLouversComponent;
  let fixture: ComponentFixture<MetalExteriorLouversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetalExteriorLouversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalExteriorLouversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
