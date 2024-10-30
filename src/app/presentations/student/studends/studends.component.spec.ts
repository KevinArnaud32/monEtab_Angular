import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudendsComponent } from './studends.component';

describe('StudendsComponent', () => {
  let component: StudendsComponent;
  let fixture: ComponentFixture<StudendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudendsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
