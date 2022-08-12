import { Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductService } from 'src/app/services/product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DisplayProductsComponent } from './display-products.component';

describe('DisplayProductsComponent', () => {
  let component: DisplayProductsComponent;
  let fixture: ComponentFixture<DisplayProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DisplayProductsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ProductService on init', () => {
    //get the service to spy on
    let service = fixture.debugElement.injector.get<ProductService>(
      ProductService as Type<ProductService>
    );

    //create a spy to watch this service
    let serviceSpy = spyOn(service, 'getProducts').and.callThrough();

    component.ngOnInit();

    expect(serviceSpy).toHaveBeenCalled();
  });
});
