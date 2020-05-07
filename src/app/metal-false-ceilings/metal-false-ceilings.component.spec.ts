import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalFalseCeilingsComponent } from './metal-false-ceilings.component';

describe('MetalFalseCeilingsComponent', () => {
  let component: MetalFalseCeilingsComponent;
  let fixture: ComponentFixture<MetalFalseCeilingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetalFalseCeilingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalFalseCeilingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
