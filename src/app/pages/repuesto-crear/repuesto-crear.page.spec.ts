import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepuestoCrearPage } from './repuesto-crear.page';

describe('RepuestoCrearPage', () => {
  let component: RepuestoCrearPage;
  let fixture: ComponentFixture<RepuestoCrearPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RepuestoCrearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
