import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paginanoencontrada404Component } from './paginanoencontrada404.component';

describe('Paginanoencontrada404Component', () => {
  let component: Paginanoencontrada404Component;
  let fixture: ComponentFixture<Paginanoencontrada404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Paginanoencontrada404Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paginanoencontrada404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
