import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnittingDetailComponent } from './knitting-detail.component';

describe('KnittingDetailComponent', () => {
  let component: KnittingDetailComponent;
  let fixture: ComponentFixture<KnittingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnittingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnittingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
