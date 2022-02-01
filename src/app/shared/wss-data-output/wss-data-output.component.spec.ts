import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WssDataOutputComponent } from './wss-data-output.component';

describe('WssDataOutputComponent', () => {
  let component: WssDataOutputComponent;
  let fixture: ComponentFixture<WssDataOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WssDataOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WssDataOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
