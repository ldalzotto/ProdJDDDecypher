import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecypherComponent } from './decypher.component';

describe('DecypherComponent', () => {
  let component: DecypherComponent;
  let fixture: ComponentFixture<DecypherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecypherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecypherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
