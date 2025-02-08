import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BUSBoxComponent } from './bus-box.component';

describe('BUSBoxComponent', () => {
  let component: BUSBoxComponent;
  let fixture: ComponentFixture<BUSBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BUSBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BUSBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
