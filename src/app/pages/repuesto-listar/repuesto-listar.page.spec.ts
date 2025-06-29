import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepuestoListarPage } from './repuesto-listar.page';

describe('RepuestoListarPage', () => {
  let component: RepuestoListarPage;
  let fixture: ComponentFixture<RepuestoListarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RepuestoListarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
