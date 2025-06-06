import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaPeliculaComponent } from './carta-pelicula.component';

describe('CartaPeliculaComponent', () => {
  let component: CartaPeliculaComponent;
  let fixture: ComponentFixture<CartaPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaPeliculaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
