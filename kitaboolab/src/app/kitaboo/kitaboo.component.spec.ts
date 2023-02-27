import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitabooComponent } from './kitaboo.component';

describe('KitabooComponent', () => {
  let component: KitabooComponent;
  let fixture: ComponentFixture<KitabooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitabooComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitabooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
