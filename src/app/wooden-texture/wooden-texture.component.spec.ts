import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodenTextureComponent } from './wooden-texture.component';

describe('WoodenTextureComponent', () => {
  let component: WoodenTextureComponent;
  let fixture: ComponentFixture<WoodenTextureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoodenTextureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodenTextureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
